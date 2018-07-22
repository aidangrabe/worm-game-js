/**
 * The main player class for the head of the Worm.
 */
class Worm extends Actor {

    constructor(screen, callbacks) {
        super(Sprite.fromImage(Assets.sprite.wormHead));

        this.screen = screen;
        this.callbacks = callbacks;

        // centre the pivot so the head rotates around its centre
        this.sprite.pivot = {
            x: this.width / 2,
            y: this.height / 2
        }

        this.sprite.x = this.width / 2;
        this.sprite.y = this.height / 2;

        this.body = [];
        this.bodyPartLife = 15;

        const speed = 4;
        const velocity = new WormMovementTrait(speed);

        // add the traits
        this.addTrait(velocity);
        this.addTrait(new FaceDirectionTrait(velocity, -Math.PI / 2));
        this.addTrait(new PlayerMovement(velocity));
        this.addTrait(new OffStageDetectorTrait(screen, this.sprite.pivot.x));

        this.velocity = velocity;
    }

    update(delta) {
        super.update(delta);

        const sprite = this.sprite;
        const bodyPart = new WormBodyPart(sprite.x - sprite.pivot.x, 
            sprite.y - sprite.pivot.y, this.bodyPartLife, this);

        this.body.push(bodyPart);

        this.callbacks.onCreateBodyPart(bodyPart);

        for (let part of this.body) {
            part.decay(delta);
        }
    }

    onDestroyBodyPart(bodyPart) {
        const index = this.body.indexOf(bodyPart);
        if (index > -1) {
            this.body.splice(index, 1);
        }

        this.callbacks.onDestroyBodyPart(bodyPart);
    }

    lengthen(amount) {
        this.bodyPartLife += amount;
    }

}
