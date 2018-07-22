/**
 * This class handles the worms body parts and decaying them so they disappear
 * after a certain length of time.
 */
class WormBodyPart extends Actor {

    constructor(worm, x, y, life, callbacks) {
        super(Sprite.fromImage(Assets.sprite.wormBody));

        this.worm = worm;
        this.life = life;
        this.sprite.x = x;
        this.sprite.y = y;
        this.callbacks = callbacks;

        this.sprite.pivot = {
            x: this.sprite.width / 2,
            y: this.sprite.height / 2
        }

        // body parts collide with the head immediately as they are created at
        // the same position. We need this active delay so we can ignore 
        // collisions until the body part is clear or the head for the first 
        // time. Note: this value needs to be checked in the CollisionManager
        // before firing valid collision events
        this.activeDelay = 30;
        this.isActive = false;
    }

    /**
     * Decay the body part (ew!).
     * This is like a timer for when the body part will be destroyed, each step
     * decay will remove life from the body part and when it reaches 0 it will 
     * be destroyed.
     * 
     * @param {Number} amount the amount to decay the body parts life by.
     */
    decay(amount) {

        if (!this.worm.alive) {
            // don't decay if the worm is not alive
            return;
        }

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
