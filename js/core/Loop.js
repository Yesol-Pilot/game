export default class Loop {
    constructor(updateFn) {
        this.updateFn = updateFn;
        this.running = false;
        this.lastTime = 0;
        this.frameId = null;
    }

    start() {
        if (this.running) return;
        this.running = true;
        this.lastTime = performance.now();
        this.loop(this.lastTime);
    }

    stop() {
        this.running = false;
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
        }
    }

    loop(timestamp) {
        if (!this.running) return;

        const deltaTime = (timestamp - this.lastTime) / 1000; // Convert to seconds
        this.lastTime = timestamp;

        if (this.updateFn) {
            this.updateFn(deltaTime);
        }

        this.frameId = requestAnimationFrame((t) => this.loop(t));
    }
}
