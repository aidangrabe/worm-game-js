class Game extends Engine {

    constructor() {
        super(document, 600, 336);

        this.currentScreen = new LoadingScreen(Assets, (assets) => {
            this.assets = assets;
            this.currentScreen = new GameScreen();
        });
    }

}

const game = new Game();
