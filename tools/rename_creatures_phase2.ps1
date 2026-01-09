[CmdletBinding()]
Param(
    [switch]$DryRun
)

# Rename Phase 2: Removing 'god_', 'hero_', 'titan_' prefixes for cleaner IDs
$creatures = @(
    # Olympus
    @{ Old = "god_zeus"; New = "zeus"; World = "olympus" },
    @{ Old = "god_poseidon"; New = "poseidon"; World = "olympus" },
    @{ Old = "god_hades"; New = "hades"; World = "olympus" },
    @{ Old = "hero_hercules"; New = "hercules"; World = "olympus" },
    @{ Old = "titan_atlas"; New = "atlas"; World = "olympus" },
    @{ Old = "titan_kronos_shade"; New = "kronos_shade"; World = "olympus" },
    
    # Asgard
    @{ Old = "god_thor"; New = "thor"; World = "asgard" },
    @{ Old = "god_loki"; New = "loki"; World = "asgard" },
    @{ Old = "god_hel"; New = "hel"; World = "asgard" },
    @{ Old = "god_freya"; New = "freya"; World = "asgard" }
)

$basePath = "d:\test\multiverse-creature-lab\images\creatures"

foreach ($c in $creatures) {
    $worldPath = Join-Path $basePath $c.World
    $oldBase = "creature_" + $c.Old
    $newBase = "creature_" + $c.New

    if (-not (Test-Path $worldPath)) {
        Write-Warning "World path not found: $worldPath"
        continue
    }

    Get-ChildItem -Path $worldPath -Include "$oldBase*.png", "$oldBase*.jpg" -Recurse | ForEach-Object {
        $extension = $_.Extension
        $baseNameWithoutExt = $_.BaseName
        $suffix = $baseNameWithoutExt.Substring($oldBase.Length) # Get suffix part (e.g., "", "_joy", "_skill")
        
        # If suffix is empty, it means it's the base image -> add _idle
        if ([string]::IsNullOrEmpty($suffix)) {
            $suffix = "_idle"
        }

        $newName = $newBase + $suffix + $extension
        
        if ($DryRun) {
            Write-Host "[DryRun] Would rename '$($_.Name)' to '$newName'" -ForegroundColor Cyan
        }
        else {
            Write-Host "Renaming '$($_.Name)' to '$newName'" -ForegroundColor Green
            Rename-Item -Path $_.FullName -NewName $newName
        }
    }

    # Fix Phase: Check if new base name exists without suffix (e.g. creature_zeus.jpg), and if so, append _idle
    # This repairs the issue where previous renaming scripts didn't add _idle.
    Get-ChildItem -Path $worldPath -Include "$newBase.png", "$newBase.jpg" -Recurse | ForEach-Object {
        $newName = $_.BaseName + "_idle" + $_.Extension
        
        if ($DryRun) {
            Write-Host "[DryRun-Fix] Would rename '$($_.Name)' to '$newName'" -ForegroundColor Yellow
        }
        else {
            Write-Host "Fixing '$($_.Name)' to '$newName'" -ForegroundColor Green
            Rename-Item -Path $_.FullName -NewName $newName
        }
    }
}
