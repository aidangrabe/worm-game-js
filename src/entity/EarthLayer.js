/**
 * This class is responsible for drawing the 'eat hole' created by the worm.
 * It does this by just drawing a circle at the worms position on a separate 
 * graphics object which is uses as its Sprite. This creates the illusion of a
 * continuous path carved out by the worm.
 * TODO: possible improvement: Use a texture as the 'paint' for the circle which
 * would be a background to make it look more like the earth is eaten away.
 */
class EarthLayer extends Actor {

    constructor() {
        const graphics = new Graphics();
        super(graphics);

        this.graphics = graphics;
    }

    static get EARTH_COLOR() {
        return 0x9B500D;
    }

    static get EAT_COLOR() {
        return 0x6B3708;
    }

    /**
     * Dig a hole in the earth.
     * 
     * @param {Sprite} sprite the Sprite that will eat away the earth. The 
     * radius will be half the width of the Sprite.
     */
    eat(sprite) {
        const graphics = this.graphics;
        const radius = sprite.width / 2;

        // draw the eat hole for the worm
        graphics.beginFill(EarthLayer.EAT_COLOR);
        graphics.drawCircle(sprite.x, sprite.y, radius);
        graphics.endFill();
    }

}