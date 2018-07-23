class _Input {

    constructor(win) {
        this.keysDown = new Array(120);
        this.mouseButtonsDown = {};

        this.mousePosition = {
            x: -1, y: -1
        };

        // setup the event listeners on the window
        win.addEventListener("keydown", (event) => {
            Input.keysDown[event.keyCode] = true;
        });
        win.addEventListener("keyup", (event) => {
            Input.keysDown[event.keyCode] = false;
        });

        win.addEventListener("touchstart", (event) => {
            const touch = event.touches[0]
            this._updateMousePosition(touch.clientX, touch.clientY);
            this.mouseButtonsDown[MouseButton.LEFT] = true;
        });
        win.addEventListener("touchend", (event) => {
            this.mouseButtonsDown[MouseButton.LEFT] = false;
        });

        win.addEventListener("mousedown", (event) => {
            // TODO handle these better
            this.mouseButtonsDown[event.button] = true;
        });
        win.addEventListener("mouseup", (event) => {
            this.mouseButtonsDown[event.button] = false;
        });
        win.addEventListener("mousemove", (event) => {
            this._updateMousePosition(event.clientX, event.clientY);
        });
    }

    _updateMousePosition(x, y) {
        this.mousePosition.x = x;
        this.mousePosition.y = y;
    }

    isKeyPressed(key) {
        return this.keysDown[key];
    }

    isMouseButtonPressed(mouseButton) {
        return this.mouseButtonsDown[mouseButton];
    }

}

const Input = new _Input(window);

const MouseButton = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
}

const Key = {
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
}