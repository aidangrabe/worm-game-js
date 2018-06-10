class VelocityTrait extends Trait {

    constructor(xSpeed = 0, ySpeed = 0) {
        super();

        this.velocity = new Vector(xSpeed, ySpeed);
    }

    update(delta) {
        this.actor.x += this.velocity.x;
        this.actor.y += this.velocity.y;
    }

}