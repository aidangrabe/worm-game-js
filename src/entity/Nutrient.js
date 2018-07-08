/**
 * This class contains logic for the nutrients that the Worm can eat. A nutrient
 * will jump to a random place on screen when the worm eats.
 * It should jump to a random, free place on screen, so it should not land on 
 * the worm's head or body.
 */
class Nutrient extends Actor {

    constructor() {
        super(Sprite.fromImage(Assets.sprite.nutrient));
    }

    jumpToRandomPlace(screen) {
        const maxX = screen.width;
        const maxY = screen.height;

        this.sprite.position = {
            x: Util.Math.random(0, maxX),
            y: Util.Math.random(0, maxY),
        }
    }

}
