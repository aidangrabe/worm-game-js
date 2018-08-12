class _Input {

    constructor(win) {
        this.keysDown = new Array(120);
        this.touches = {};

        for (let i = 0; i < 5; i++) {
            this.touches[i] = { x: -1, y: -1 };
        }

        this.activeTouchIndex = -1;
        this.onClickListener = (event) => { };

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
    }

    /**
     * Attach the mouse/touch listeners to the given Stage.
     * 
     * @param {Stage} stage the stage to attach the listeners to.
     */
    attachListeners(stage) {
        stage
            .on('pointerdown', (e) => {
                log(e.data);
                this.activeTouchIndex = e.data.identifier;
                this.mousePosition = e.data.global;
            })
            .on('pointerup', (e) => {
                if (this.activeTouchIndex == e.data.identifier) {
                    this.activeTouchIndex = -1;
                }
                this.onClickListener(e);
            })
            .on('pointermove', (e) => {
                const index = e.data.identifier;
                const mousePosition = e.data.global;

                this.touches[index] = mousePosition;
                this.mousePosition = mousePosition;
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
        return this.activeTouchIndex > -1;
    }

    setOnClickListener(listener) {
        this.onClickListener = listener;
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