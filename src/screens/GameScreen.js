/**
 * The actual game screen that handles adding the entities to the main stage.
 */
class GameScreen extends Screen {

    constructor() {
        super();
    }

    enter() {
        super.enter();

        this.worm = new Worm(this);
        this.earthLayer = new EarthLayer(this.worm);
        this.nutrient = new Nutrient(this);
        this.nutrient.jumpToRandomPlace();

        this.backgroundColor = this.earthLayer.EAT_COLOR;

        this.addActor(this.earthLayer);
        this.addActor(this.worm);
        this.addActor(this.nutrient);
        this.addActor(new CollisionManager(this.worm, this.nutrient, this));
    }

    onWormHitNutrient() {
        this.nutrient.jumpToRandomPlace();
    }

}