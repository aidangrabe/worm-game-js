const Direction = {
    CLOCKWISE: 1,
    ANTI_CLOCKWISE: -1
}

class PlayerMovement extends Trait {

    constructor(speed) {
        super();

        this.rotationSpeed = 15;
    }

    rotate(direction) {
        const velocity = this.velocity;
        velocity.rotateDeg(velocity.angle() + this.rotationSpeed * direction);
    }

}