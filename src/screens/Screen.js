class Screen {

    constructor() {
        this.stage = null;  // PIXI.Container
        this.bounds = null; // PIXI.Rectangle
        this.actors = [];
    }

    enter() {
    }

    leave() {
    }

    preUpdate(delta) {
    }

    update(delta) {
        const actors = this.actors;
        
        for (const actor of actors) {
            actor.update(delta);
        }
    }

    addActor(actor) {
        this.actors.push(actor);
        this.stage.addChild(actor.sprite);
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