const Direction = {
    CLOCKWISE: 1,
    ANTI_CLOCKWISE: -1
}

class PlayerMovement extends Trait {

    constructor(velocity) {
        super();

        this.velocity = velocity.velocity;
        this.rotationSpeed = 5;
    }

    rotate(direction) {
        const velocity = this.velocity;
        velocity.rotateDeg(this.rotationSpeed * direction);
    }

    update(delta) {
        if (Input.isKeyPressed(Key.RIGHT)) {
            this.rotate(Direction.CLOCKWISE);
        }
        if (Input.isKeyPressed(Key.LEFT)) {
            this.rotate(Direction.ANTI_CLOCKWISE);
        }

        if (Input.isMouseButtonPressed(MouseButton.LEFT)) {
            if (Input.mousePosition.x < Game.WIDTH / 2) {
                this.rotate(Direction.ANTI_CLOCKWISE);
            } else {
                this.rotate(Direction.CLOCKWISE);
            }
        }
    }

}