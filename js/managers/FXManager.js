/**
 * FXManager: 게임 내 다양한 시각 효과(FX)를 관리하는 매니저
 * 화면 흔들림, 발광, 파티클 효과 등을 처리합니다.
 */
export default class FXManager {
    constructor(game) {
        this.game = game;
        this.container = document.body; // 기본적으로 body에 효과 적용
    }

    /**
     * 화면 흔들림 효과
     * @param {number} intensity - 흔들림 강도 (px)
     * @param {number} duration - 지속 시간 (ms)
     */
    shake(intensity = 5, duration = 500) {
        const target = document.querySelector('#app-container') || document.body;
        target.style.transition = 'none';

        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            if (elapsed < duration) {
                const x = (Math.random() - 0.5) * intensity;
                const y = (Math.random() - 0.5) * intensity;
                target.style.transform = `translate(${x}px, ${y}px)`;
                requestAnimationFrame(animate);
            } else {
                target.style.transform = '';
            }
        };
        requestAnimationFrame(animate);
    }

    /**
     * 전체 화면 발광 효과
     * @param {string} color - 발광 색상
     * @param {number} duration - 지속 시간 (ms)
     */
    flash(color = '#ffffff', duration = 300) {
        const flashDiv = document.createElement('div');
        flashDiv.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: ${color}; z-index: 100000; pointer-events: none;
            opacity: 0.8; transition: opacity ${duration}ms ease-out;
        `;
        document.body.appendChild(flashDiv);

        requestAnimationFrame(() => {
            flashDiv.style.opacity = '0';
        });

        setTimeout(() => {
            document.body.removeChild(flashDiv);
        }, duration);
    }

    /**
     * 특정 위치에 입자 효과 생성
     * @param {number} x - X 좌표
     * @param {number} y - Y 좌표
     * @param {object} options - 개수, 색상, 크기 등
     */
    createParticles(x, y, options = {}) {
        const {
            count = 20,
            color = '#00F0FF',
            sizeMin = 2,
            sizeMax = 6,
            velocityMin = 2,
            velocityMax = 10,
            life = 1000
        } = options;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * (sizeMax - sizeMin) + sizeMin;
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * (velocityMax - velocityMin) + velocityMin;

            particle.style.cssText = `
                position: fixed; left: ${x}px; top: ${y}px;
                width: ${size}px; height: ${size}px;
                background: ${color}; border-radius: 50%;
                z-index: 99999; pointer-events: none;
                box-shadow: 0 0 ${size}px ${color};
            `;

            document.body.appendChild(particle);

            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            let px = x;
            let py = y;
            let opacity = 1;
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / life;

                if (progress < 1) {
                    px += vx;
                    py += vy;
                    opacity = 1 - progress;
                    particle.style.transform = `translate(${px - x}px, ${py - y}px)`;
                    particle.style.opacity = opacity;
                    requestAnimationFrame(animate);
                } else {
                    if (particle.parentNode) {
                        document.body.removeChild(particle);
                    }
                }
            };
            requestAnimationFrame(animate);
        }
    }

    /**
     * 등급별 색상 반환
     */
    getRarityColor(rarity) {
        const colors = {
            'Normal': '#9E9E9E',
            'Unique': '#66BB6A',
            'Rare': '#42A5F5',
            'Special': '#AB47BC',
            'SR': '#FF7043',
            'SSR': '#EF5350',
            'UR': '#FFD700'
        };
        return colors[rarity] || '#ffffff';
    }
}
