
class Engine {

    constructor(doc, width, height) {
        // {backgroundColor : 0x1099bb}
        const app = new PIXI.Application(width, height);
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
            currentScreen.removeChild(currentScreen.stage);
            currentScreen.leave();
        }

        // handle new screen events
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
        
        this._currentScreen.update();
    }

    preUpdate(delta) {
        this._currentScreen.preUpdate(delta);
    }

    update(delta) {
        this._currentScreen.update(delta);
    }

}

var Input = {
    keysDown: new Array(120),
    isKeyDown: function(key) {
        return this.keysDown[key];
    }
};

window.addEventListener("keydown", function(event) {
    Input.keysDown[event.keyCode] = true;
});
window.addEventListener("keyup", function(event) {
    Input.keysDown[event.keyCode] = false;
});
