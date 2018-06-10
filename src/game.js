class Game extends Engine {

    constructor() {
        super(document, 800, 600);

        this.currentScreen = new LoadingScreen(Assets, (assets) => {
            this.assets = assets;
            this.currentScreen = new GameScreen();
        });
    }

    // onKeyDown(event) {
    //     const currentScreen = this.currentScreen;
    //     if (currentScreen.onKeyDown) {
    //         currentScreen.onKeyDown(event.keyCode);
    //     }
    // }

    // onStart() {
    //     this.setScreen(new LoadingScreen((assets) => {
    //         window.assets = assets;
    //         this.setScreen(new GameScreen());
    //     }));
    // }

}

const game = new Game();
