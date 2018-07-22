/**
 * This class handles all collision checking and calling the correct callbacks
 * on the entities.
 */
class CollisionManager extends Actor {

    constructor(worm, nutrient, callbacks) {
        // no Sprite for this Actor
        super(null);

        this.worm = worm;
        this.nutrient = nutrient;
        this.callbacks = callbacks;
    }

    update(delta) {
        const nutrient = this.nutrient.sprite;
        const worm = this.worm.sprite;
        const bodyParts = this.worm.body;

        // check collisions with body
        for (const part of bodyParts) {

            // ignore parts that are not active
            if (!part.isActive) {
                continue;
            }
            if (this.hitTestCircle(part.sprite, worm)) {
                this.callbacks.onWormHitBody();
            }

        }

        // check for collisions with the nutrient
        if (this.hitTestCircle(nutrient, worm)) {
            this.callbacks.onWormHitNutrient();
        }
    }

    /**
     * Check if two Sprites collide. Note: this function assumes that the 
     * Sprites are circles.
     */
    hitTestCircle(s1, s2) {
        return Util.Math.circlesIntersect(
            s1.x, s1.y, s1.width / 2,
            s2.x, s2.y, s2.width / 2
        );
    }

}