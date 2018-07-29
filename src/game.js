class _Game extends Engine {

    constructor() {
        super(document, 600, 336);

        this.currentScreen = new LoadingScreen(Assets, Sound, (assets) => {
            this.assets = assets;
            this.currentScreen = new GameScreen();
        });
    }

}

const Game = new _Game();
