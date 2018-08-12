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
        // counter to make sure we don't loop for ever!
        let i = 0;

        // keep jumping to random places until one is free
        do {
            i++;
            this._moveToRandomPosition()
        } while (!this._isNewPositionFree() && i < 3);
    }

    /**
     * Check if the new position of the Nutrient is free (it is not intersecting
     * a body part or the worms head).
     */
    _isNewPositionFree() {
        const nutrientSprite = this.sprite;
        const wormSprite = this.worm.sprite;
        const bodyParts = this.worm.body;

        // check to see if the new position is intersecting with a body part
        for (const part of bodyParts) {
            const partSprite = part.sprite;
            const positionOccupied = Util.Math.circlesIntersect(
                // first circle
                nutrientSprite.x, nutrientSprite.y, nutrientSprite.width / 2,
                // second circle
                partSprite.x, partSprite.y, partSprite.width / 2
            );

            if (positionOccupied) {
                return false;
            }
        }

        // check to see if the new position is intersecting with the worms head
        return !Util.Math.circlesIntersect(
            // first circle
            nutrientSprite.x, nutrientSprite.y, nutrientSprite.width / 2,
            // second circle
            wormSprite.x, wormSprite.y, wormSprite.width / 2
        );
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
