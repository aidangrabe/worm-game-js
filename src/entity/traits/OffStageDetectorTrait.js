/**
 * A simple trait for detecting whether a sprite is offscreen and wrapping it 
 * to the other side of the screen if it is
 */
class OffStageDetectorTrait extends Trait {

    constructor(screen, margin) {
        super();
        this.screen = screen;
        this.margin = margin;
    }

    update(delta) {
        const actor = this.actor;
        const screen = this.screen;
        const margin = this.margin;

        // wrap from left to right
        if (actor.x < -margin) {
            actor.x = screen.width + margin;
        }

        // wrap right to left
        if (actor.x > screen.width + margin) {
            actor.x = -margin;
        }

        // wrap top to bottom
        if (actor.y < -margin) {
            actor.y = screen.height + margin;
        }

        // wrap bottom to top
        if (actor.y > screen.height + margin) {
            actor.y = -margin;
        }

    }

}