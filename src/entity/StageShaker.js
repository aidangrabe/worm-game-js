/**
 * Shake that Stage!
 */
class StageShaker extends Actor {

    constructor(stage, magnitude, duration) {
        super();

        this._life = 0;

        this.stage = stage;
        this.magnitude = magnitude;
        this.life = duration;
    }

    update(delta) {
        super.update(delta);

        const stage = this.stage;
        const magnitude = this.magnitude;

        this._life -= delta;

        if (this._life > 0) {
            // shake the stage
            stage.x = Util.Math.random(-magnitude, magnitude);
            stage.y = Util.Math.random(-magnitude, magnitude);
        } else {
            stage.x = 0;
            stage.y = 0;
        }
    }

    shake(magnitude, duration) {
        this.magnitude = magnitude;
        this.life = duration;
    }

    set life(value) {
        this._life = value * 60;    // * 60 == target framerate
    }

}