/**
 * A VelocityTrait for mimicing the movement of a worm!
 */
class WormMovementTrait extends VelocityTrait {

    constructor(speed) {
        super(speed, 0, 4);
        // this.acceleration = new Vector(1.05, 1.05);
        // this.moveCounter = 0;
        // this.velocity
        //     .norm()
        //     .multiply(this.acceleration);
    }

    update(delta) {
        // this.moveCounter++;

        // if (this.moveCounter > 40) {
        //     this.moveCounter = 0;

        //     // stopped
        //     this.velocity.norm().multiply(new Vector(0, 0));
        // }

        // if (this.moveCounter >= 0) {

        //     // accelerate
        //     this.velocity
        //         .multiply(this.acceleration);
        // }

        super.update(delta);
    }

}