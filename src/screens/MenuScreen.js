/**
 * The Main Menu class that shows the main options for the game.
 */
class MenuScreen extends Screen {

    constructor(callbacks) {
        super();
        this.callbacks = callbacks;
    }

    enter() {
        this.earthLayer = new EarthLayer();

        this.backgroundColor = EarthLayer.EARTH_COLOR;

        const container = new VerticalContainer({
            gravity: "center"
        });

        container.addChild(this.createTitleLogo());
        container.addChild(this.createTitleText());
        container.addChild(this.createPlayButton());
        container.center(Game.WIDTH / 2, Game.HEIGHT / 2);

        this.addActor(this.earthLayer);
        this.stage.addChild(container);
    }

    leave() {
    }

    createTitleLogo() {
        const sprite = Sprite.fromImage(Assets.sprite.titleLogo);
        return sprite;
    }

    createTitleText() {
        const text = new Text("Worm", Font.LoadingScreen);
        return text;
    }

    createPlayButton() {
        const text = new Text("Play", Font.LoadingScreen);
        text.interactive = true;
        text.buttonMode = true;
        text.on("pointerdown", (e) => this.onPlayButtonPressed())

        return text;
    }

    onPlayButtonPressed() {
        this.callbacks.onStartGame();
    }

}