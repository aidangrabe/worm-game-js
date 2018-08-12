class DebugHud extends Actor {

    constructor() {
        const container = new Container();

        super(container);

        this.touchLabels = [];

        const text = new Text("fps: 0", Font.ScoreText);
        this.fpsCounter = text;
        this.fpsCounter.x = 5;
        this.fpsCounter.y = Game.HEIGHT - text.height - 5;

        container.addChild(text);
        container.addChild(this.createTouchesText());
    }

    update(delta) {
        super.update(delta);

        const fps = Math.round(Game.app.ticker.FPS);
        this.fpsCounter.text = `fps: ${fps}`;

        for (const index in this.touchLabels) {
            const label = this.touchLabels[index];
            const pos = Input.touches[index];

            label.text = `[${index}] -> ${pos.x}, ${pos.y}`;
        }

        this.activeIndexLabel.text = `Active index: ${Input.activeTouchIndex}`;
    }

    createTouchesText() {
        const container = new VerticalContainer();

        this.touchLabels.push(new Text("0", Font.Debug));
        this.touchLabels.push(new Text("0", Font.Debug));
        this.touchLabels.push(new Text("0", Font.Debug));
        this.touchLabels.push(new Text("0", Font.Debug));
        this.touchLabels.push(new Text("0", Font.Debug));

        for (const label of this.touchLabels) {
            container.addChild(label);
        }

        this.activeIndexLabel = new Text("Active index: ", Font.Debug);
        container.addChild(this.activeIndexLabel);

        container.x = 5;
        container.y = Game.HEIGHT - container.height - 40;

        return container;
    }

}