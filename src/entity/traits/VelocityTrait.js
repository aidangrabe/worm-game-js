class VelocityTrait extends Trait {

    constructor(xSpeed = 0, ySpeed = 0, maxSpeed = 10000) {
        super();

        this.velocity = new Vector(xSpeed, ySpeed);
        this.maxSpeedVector = new Vector(maxSpeed, maxSpeed);
    }

    update(delta) {
        const actor = this.actor;
        const velocity = this.velocity;

        // clamp the speed to the maxSpeedVector
        if (velocity.length() > this.maxSpeedVector.x) {
            velocity
                .norm()
                .multiply(this.maxSpeedVector);
        }

        actor.x += velocity.x;
        actor.y += velocity.y;
    }

}