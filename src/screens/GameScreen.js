/**
 * The actual game screen that handles adding the entities to the main stage.
 */
class GameScreen extends Screen {

    constructor() {
        super();
    }

    enter() {
        super.enter();

        this.worm = new Worm(this, this);
        this.bodyPartLayer = new Container();
        this.scoreKeeper = new ScoreKeeper();

        this.earthLayer = new EarthLayer(this.worm);
        this.nutrient = new Nutrient(this);
        this.nutrient.jumpToRandomPlace();

        this.backgroundColor = this.earthLayer.EAT_COLOR;

        // layers
        this.addActor(this.earthLayer);
        this.stage.addChild(this.bodyPartLayer);

        this.addActor(this.worm);
        this.addActor(this.nutrient);

        // extra managers
        this.addActor(this.scoreKeeper);
        this.addActor(new CollisionManager(this.worm, this.nutrient, this));
        this.addActor(new GameHud(this, this.scoreKeeper));

        // TODO add HUD
    }

    onCreateBodyPart(bodyPart) {
        // don't add it to the screen as it's unnecessary, we don't need to call
        // update at every step for the body parts
        this.bodyPartLayer.addChild(bodyPart.sprite);
    }

    onDestroyBodyPart(bodyPart) {
        this.bodyPartLayer.removeChild(bodyPart.sprite);
    }

    onWormHitNutrient() {
        this.nutrient.jumpToRandomPlace();
        this.worm.lengthen(15);
        this.scoreKeeper.increment();
    }

    onWormHitBody() {
        this.worm.kill();
    }

}