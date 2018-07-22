/**
 * 
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

        if (this.hitTestCircle(nutrient, worm)) {
            this.callbacks.onWormHitNutrient();
        }
    }

    hitTestCircle(s1, s2) {
        const p1 = s1.pivot;
        const p2 = s2.pivot;

        // todo handle pivot
        return Util.Math.circlesIntersect(
            s1.x - p1.x, s1.y - p1.y, s1.width / 2,
            s2.x - p2.x, s2.y - p2.y, s2.width / 2
        );
    }

}