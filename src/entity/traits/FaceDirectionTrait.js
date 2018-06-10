class FaceDirectionTrait extends VelocityTrait {

    constructor(velocityTrait, offestAngle = 0) {
        super();

        this.offestAngle = offestAngle;
        this.velocityTrait = velocityTrait;
    }

    update(delta) {
        this.actor.rotation = this.velocityTrait.velocity.angle() + this.offestAngle;
    }

}