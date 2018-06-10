class Screen {

    constructor() {
        this.stage = null;  // PIXI.Container
        this.bounds = null; // PIXI.Rectangle
    }

    enter() {
    }

    leave() {
    }

    preUpdate(delta) {
    }

    update(delta) {
    }

    get width() {
        return this.bounds.width;
    }

    get height() {
        return this.bounds.height;
    }

    get center() {
        return new PIXI.Point(this.width / 2, this.height / 2);
    }

}