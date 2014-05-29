// Game.js
// @author Aidan Grabe

var Game = function() {
    var me = this;

    var assets;
    var currentScreen;

    var onKeyDown = function(event) {
        if (currentScreen.onKeyDown) {
            currentScreen.onKeyDown(event.keyCode);
        }
    };

    var onStart = function() {
        setScreen(new LoadingScreen(function(assets) {
            window.assets = assets;
            setScreen(new GameScreen());
        }));
    };
    
    var update = function(delta) {
        currentScreen.update(delta);
    };

    var render = function(ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        currentScreen.render(ctx);
    };

    var setScreen = function(screen) {
        if (currentScreen) {
            currentScreen.onFinish();
        }
        currentScreen = screen;
        screen.onStart();
    };

    return {
        onKeyDown: onKeyDown,
        onStart: onStart,
        update: update,
        render: render,
        setScreen: setScreen
    };
};

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

var gameController = new Game();

var engine = new Engine(gameController);
engine.start();
