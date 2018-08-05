class Screen {

    constructor() {
        this.stage = null;  // PIXI.Container
        this.bounds = null; // PIXI.Rectangle
        this.app = null; // The main app (PIXI.Application), set by the engine
        this.actors = [];
    }

    enter() {
    }

    leave() {
    }

    /**
     * Called when the stage was clicked. Subclasses can override this function
     * to handle clicks.
     * 
     * @param {PIXI.InteractionEvent} mouseEvent the mouse event that was 
     * triggered by the user.
     */
    onClick(mouseEvent) {
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
        if (actor.sprite) {
            this.stage.addChild(actor.sprite);
        }
    }

    removeAllActors() {
        this.actors = [];
        this.stage.removeChildren();
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

    set backgroundColor(color) {
        this.app.renderer.backgroundColor = color;
    }

}