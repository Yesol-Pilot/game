
# 리소스 리네이밍 스크립트 (Rename Creatures)
# 목적: 혼재된 파일명을 표준화된 ID 기반 이름으로 일괄 변경
# 경고: 실행 전 백업 필수 (이미 완료됨)

$creaturePath = "d:\test\multiverse-creature-lab\images\creatures"

# 매핑 규칙 정의 (OldPattern -> NewID)
# Regex Pattern을 사용하여 접미사까지 처리
$mappings = @(
    @{ Old = "dragon_chaos"; New = "tiamat"; World = "abyss" },
    @{ Old = "void_emperor"; New = "erebus"; World = "abyss" },
    @{ Old = "demon_king"; New = "baal"; World = "abyss" },
    @{ Old = "god_shub"; New = "shub_niggurath"; World = "abyss" },
    @{ Old = "god_cthulhu"; New = "cthulhu"; World = "abyss" },
    @{ Old = "kraken_worldstar"; New = "lulu_worldstar"; World = "abyss" },
    @{ Old = "dragon_ancient"; New = "bahamut"; World = "shangrila" },
    @{ Old = "god_dragon_king"; New = "dragon_king"; World = "shangrila" },
    @{ Old = "fox_nine_ur"; New = "miho"; World = "shangrila" },
    @{ Old = "fox_nine_new"; New = "miho"; World = "shangrila" },
    @{ Old = "god_odin"; New = "odin"; World = "asgard" },
    @{ Old = "god_gaia"; New = "gaia_olympus"; World = "olympus" },
    @{ Old = "creator_gaia"; New = "gaia_origin"; World = "wild" }
)

# 상태 접미사 목록 (이것들이 없으면 _idle을 붙일 수도 있음)
$suffixes = @("joy", "sad", "angry", "skill", "victory", "defeat", "gallery_lv1", "gallery_lv2", "gallery_lv3", "gallery_lv2_alt")

foreach ($map in $mappings) {
    $worldPath = Join-Path $creaturePath $map.World
    $oldPattern = "*creature_" + $map.Old + "*"
    
    Write-Host "Processing $($map.Old) -> $($map.New) in $($map.World)..."

    $files = Get-ChildItem -Path $worldPath -Filter $oldPattern -File

    foreach ($file in $files) {
        $oldName = $file.Name
        
        # 기본 새 이름 시작
        $newNameBase = "creature_" + $map.New

        # 상태 접미사 추출 및 적용
        # 예: creature_dragon_chaos_joy.png -> joy 추출
        # 예: creature_dragon_chaos.png -> (없음)
        
        $stateFound = $false
        foreach ($suffix in $suffixes) {
            if ($oldName -match $suffix) {
                # 접미사가 있으면 그대로 붙임
                $newName = $newNameBase + "_" + $suffix + ".png"
                $stateFound = $true
                break
            }
        }

        if (-not $stateFound) {
            # 상태 접미사가 없는 경우 (Base/Idle) -> _idle 붙임??
            # 기존 파일에 이미 idle이 붙어있을 수도 있음.
            if ($oldName -match "_idle") {
                $newName = $newNameBase + "_idle.png"
            }
            else {
                # 아무것도 없으면 기본적으로 _idle로 간주하여 붙임 (표준화)
                # 단, _generated_... 같은게 붙어있으면 조심해야함.
                if ($oldName -match "generated") {
                    Write-Warning "Skipping generated file: $oldName"
                    continue
                }
                $newName = $newNameBase + "_idle.png"
            }
        }

        # _idle_idle 중복 방지
        if ($newName -match "_idle_idle") {
            $newName = $newName.Replace("_idle_idle", "_idle")
        }

        $newPath = Join-Path $worldPath $newName
        
        if (Test-Path $newPath) {
            Write-Warning "Target file exists: $newName. Skipping $oldName"
        }
        else {
            Rename-Item -Path $file.FullName -NewName $newName
            Write-Host "Renamed: $oldName -> $newName" -ForegroundColor Green
        }
    }
}

Write-Host "Rename process completed."
