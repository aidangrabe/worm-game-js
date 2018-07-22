/**
 * 
 */
class WormBodyPart extends Actor {

    constructor(x, y, life, callbacks) {
        super(Sprite.fromImage(Assets.sprite.wormBody));

        this.life = life;
        this.sprite.x = x;
        this.sprite.y = y;
        this.callbacks = callbacks;
    }

    decay(amount) {
        this.life -= amount;

        if (this.life <= 0) {
            this.callbacks.onDestroyBodyPart(this);
        }
    }

}
