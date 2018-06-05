class Game {

    constructor() {
        this.currentScreen = null;
        this.canvas = null;
    }

    onKeyDown(event) {
        const currentScreen = this.currentScreen;
        if (currentScreen.onKeyDown) {
            currentScreen.onKeyDown(event.keyCode);
        }
    }

    onStart() {
        this.setScreen(new LoadingScreen((assets) => {
            window.assets = assets;
            this.setScreen(new GameScreen());
        }));
    }

    update(delta) {
        this.currentScreen.update(delta);
    }

    render(ctx) {
        const canvas = this.canvas;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.currentScreen.render(ctx);
    }

    setScreen(screen) {
        const currentScreen = this.currentScreen;

        if (currentScreen && currentScreen.onFinish) {
            currentScreen.onFinish();
        }

        this.currentScreen = screen;
        if (screen.onStart) {
            screen.onStart();
        }
    }

}

var Keys = {
    ENTER: 13,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
};

const gameController = new Game();

const engine = new Engine(gameController);
engine.start();
