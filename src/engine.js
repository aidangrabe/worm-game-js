
class Engine {

    constructor(doc, width, height) {
        this.WIDTH = width;
        this.HEIGHT = height;

        const options = {
            antialias: true
        };

        const app = new PIXI.Application(width, height, options);
        app.ticker.add((delta) => this.gameLoop(delta));
        doc.body.appendChild(app.view);

        this.app = app;
        this.mainStage = app.stage;

        this._currentScreen = null;
    }

    set currentScreen(screen) {
        const currentScreen = this._currentScreen;

        // handle old screen events
        if (currentScreen != null) {
            this.app.stage.removeChild(currentScreen.stage);
            // currentScreen.stage.removeChild(currentScreen.stage);
            currentScreen.leave();
        }

        // handle new screen events
        screen.app = this.app;
        screen.stage = new PIXI.Container();
        screen.bounds = this.app.screen;
        screen.enter();
        this.app.stage.addChild(screen.stage);
        this._currentScreen = screen;
    }

    get currentScreen() {
        return this._currentScreen;
    }

    gameLoop(delta) {
        this.preUpdate(delta);
        this.update(delta);
    }

    preUpdate(delta) {
        this._currentScreen.preUpdate(delta);
    }

    update(delta) {
        this._currentScreen.update(delta);
    }

    /**
     * Make the canvas fullscreen in that stretches to fill the visible browser
     * window.
     */
    stretchToFitScreen() {
        const app = this.app;
        app.view.style.width = window.innerWidth + "px";
        app.view.style.height = window.innerHeight + "px";
    }

}