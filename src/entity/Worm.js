/**
 * The main player class for the head of the Worm.
 */
class Worm extends Actor {

    constructor(stage) {
        super(Sprite.fromImage(Assets.sprite.wormHead));

        // centre the pivot so the head rotates around its centre
        this.sprite.pivot = {
            x: this.width / 2,
            y: this.height / 2
        }

        this.sprite.x = this.width / 2;
        this.sprite.y = this.height / 2;

        const speed = 4;
        const velocity = new WormMovementTrait(speed);

        // add the traits
        this.addTrait(velocity);
        this.addTrait(new FaceDirectionTrait(velocity, -Math.PI / 2));
        this.addTrait(new PlayerMovement(velocity));
        this.addTrait(new OffStageDetectorTrait(stage, this.sprite.pivot.x));

        this.velocity = velocity;
    }

}
