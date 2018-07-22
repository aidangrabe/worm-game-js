/**
 * This class handles the worms body parts and decaying them so they disappear
 * after a certain length of time.
 */
class WormBodyPart extends Actor {

    constructor(x, y, life, callbacks) {
        super(Sprite.fromImage(Assets.sprite.wormBody));

        this.life = life;
        this.sprite.x = x;
        this.sprite.y = y;
        this.callbacks = callbacks;

        // body parts collide with the head immediately as they are created at
        // the same position. We need this active delay so we can ignore 
        // collisions until the body part is clear or the head for the first 
        // time. Note: this value needs to be checked in the CollisionManager
        // before firing valid collision events
        this.activeDelay = 30;
        this.isActive = false;
    }

    decay(amount) {
        this.life -= amount;
        this.activeDelay -= amount;

        if (this.activeDelay < 0) {
            this.isActive = true;
        }

        if (this.life <= 0) {
            this.callbacks.onDestroyBodyPart(this);
        }
    }

}
