import { RANKS } from '../RankData.js';
import { WORLDS } from '../WorldData.js';

export const ASGARD_CREATURES = [
    {
        id: "wolf_fenrir",
        name: "종말의 늑대 펜리르",
        rarity: RANKS.SSR,
        world: WORLDS.ASGARD,
        elements: ["Dark", "Ice", "Beast"],
        ego: "Berserker",
        baseStr: 55, baseInt: 30,
        image: "images/creature_wolf_fenrir.png",
        sprites: {
            idle: "images/creature_wolf_fenrir.png",
            joy: "images/creature_wolf_fenrir_joy.png",
            sad: "images/creature_wolf_fenrir_sad.png",
            angry: "images/creature_wolf_fenrir_angry.png",
            skill: "images/creature_wolf_fenrir_skill.png",
            gallery: "images/creature_wolf_fenrir_gallery.png"
        },
        prompts: {
            base: "anime style, cell shaded, 2d game art, full body, fantasy, Dark, Ice, Beast, 종말의 늑대 펜리르",
            idle: "standing pose, confident, neutral expression",
            joy: "smiling, blushing, happy eyes, hand waving, flowers in background",
            sad: "sad expression, looking down, tears, injured, dark atmosphere",
            angry: "angry, shouting, glowing eyes, battle stance, attacking effect",
            skill: "extreme dynamic angle, close up, unleashing ultimate skill, cinematic lighting, masterpiece",
            gallery: "alluring pose, blushing, soft lighting, detailed face, looking at viewer, charm, slight smile, high detail masterpiece, 종말의 늑대 펜리르 special illustration, intimate atmosphere"
        },
        lore: {
            title: "지혜의 대가를 치른 자",
            story: "아홉 세계를 다스리는 북유럽의 최고신. 지혜를 위해 한쪽 눈을 희생하고, 우주의 비밀을 알기 위해 위그드라실에 9일간 목을 매달았다. 냉철하고 계산적이지만, 인정받은 전사에게는 발할라의 문을 연다. 라그나로크에서 펜리르에게 삼켜질 운명.",
            personality: "Unknown"
        },
        relationships: [
            { id: "god_odin", type: "rival", desc: "나를 묶은 장본인. 반드시 삼킨다." },
            { id: "wolf_dire", type: "family", desc: "늑대 후배. 함께하면 공격력 버프" }
        ],
        touchLines: {
            idle: ["..."],
            interaction: ["..."],
            gift: ["고맙다."],
            special: ["!!!"]
        },
        lines: {
            normal: "이 사슬... 끊어버리겠어!",
            touch_head: "크르릉... 쓰다듬는 건... 딱 한 번만 허락하지.",
            touch_chest: "심장 소리가 거세지는 건... 굶주림 때문이야!",
            touch_chest_reject: "크르르! 함부로 만지지 마!",
            touch_chest_love: "흥... 너한테만 예외를 두는 거야.",
            touch_legs: "발목 사슬은 이미 끊었어. 다음은 네 마음이야.",
            touch_special: "라그나로크의 시작이다!"
        },
        synergy: { ally: ["wolf_dire", "demon_king"], rival: ["god_odin", "valkyrie"] }
    },
