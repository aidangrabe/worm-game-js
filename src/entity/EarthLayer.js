/**
 * This class is responsible for drawing the 'eat hole' created by the worm.
 * It does this by just drawing a circle at the worms position on a separate 
 * graphics object which is uses as its Sprite. This creates the illusion of a
 * continuous path carved out by the worm.
 * TODO: possible improvement: Use a texture as the 'paint' for the circle which
 * would be a background to make it look more like the earth is eaten away.
 */
class EarthLayer extends Actor {

    constructor(worm) {
        const graphics = new Graphics();
        super(graphics);

        this.graphics = graphics;
        this.worm = worm;

        this.EARTH_COLOR = 0x6B3708;
        this.EAT_COLOR = 0x9B500D;
    }

    update(delta) {
        const graphics = this.graphics;
        const wormSprite = this.worm.sprite;
        const wormPosition = wormSprite.position;
        const eatHoleRadius = wormSprite.width / 2;

        // draw the eat hole for the worm
        graphics.beginFill(this.EARTH_COLOR);
        graphics.drawCircle(wormPosition.x, wormPosition.y, eatHoleRadius);
        graphics.endFill();
    }

}