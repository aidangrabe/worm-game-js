class Game extends Engine {

    constructor() {
        super(document, 800, 600);

        this.currentScreen = new LoadingScreen(Assets, (assets) => {
            this.assets = assets;
            this.currentScreen = new GameScreen();
        });
    }

}

const game = new Game();
