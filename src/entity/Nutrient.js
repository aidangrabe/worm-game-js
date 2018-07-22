/**
 * This class contains logic for the nutrients that the Worm can eat. A nutrient
 * will jump to a random place on screen when the worm eats.
 * It should jump to a random, free place on screen, so it should not land on 
 * the worm's head or body.
 */
class Nutrient extends Actor {

    constructor(screen, worm) {
        super(Sprite.fromImage(Assets.sprite.nutrient));

        this.screen = screen;
        this.worm = worm;

        this.sprite.pivot = {
            x: 8, y: 8
        }
    }

    /**
     * Jump the sprite to a random location on screen. If the position is not
     * free, try to jump again until a free spot is found.
     */
    jumpToRandomPlace() {
        const sprite = this.sprite;

        // keep jumping to random places until one is free
        do {
            this._moveToRandomPosition()
        } while (!this._isPositionFree(sprite.x, sprite.y));
    }

    /**
     * Check if the position given by (x, y) is collision free.
     */
    _isPositionFree(x, y) {
        const sprite = this.sprite;

        // TODO check against the body parts too
        return Util.Math.pointInCircle(x, y, sprite.x, sprite.y, sprite.width / 2);
    }

    /**
     * Move the sprite to a random location within the screen.
     */
    _moveToRandomPosition() {
        const screen = this.screen;
        const maxX = screen.width - this.sprite.width;
        const maxY = screen.height - this.sprite.height;
        const sprite = this.sprite;

        sprite.position.x = Util.Math.random(0, maxX);
        sprite.position.y = Util.Math.random(0, maxY);
    }

}
