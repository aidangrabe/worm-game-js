class LoadingBar extends Entity {

    constructor(width, height, fillColor = 0xAAAAAA, borderColor = 0xFFFFFF) {
        super();

        this.width = width;
        this.height = height;
        this.fillColor = fillColor;
        this.borderColor = borderColor;

        this.loadingBarGraphics = this._createloadingBarGraphics();

        const sprite = new Container();
        sprite.addChild(this._createBorderGraphics());
        sprite.addChild(this.loadingBarGraphics);
        this._sprite = sprite;
    }

    set progress(progress) {
        this.loadingBarGraphics.width = progress / 100 * (this.width - 2);
    }

    get sprite() {
        return this._sprite;
    }

    _createBorderGraphics() {
        const graphics = new Graphics();
        graphics.beginFill(this.borderColor);
        graphics.drawRect(0, 0, 1, 1);
        graphics.endFill();
        graphics.width = this.width;
        graphics.height = this.height;
        return graphics;
    }

    _createloadingBarGraphics() {
        const graphics = new Graphics();
        graphics.beginFill(this.fillColor);
        graphics.drawRect(0, 0, 1, 1);
        graphics.endFill();
        graphics.x = 1;
        graphics.y = 1;
        graphics.width = 0;
        graphics.height = this.height - 2;
        return graphics;
    }

}