
class LoadingScreen extends Screen {

    constructor(callback) {
        super();

        this.progressText = new Text("Loading 0%", Font.LoadingScreen);
        this.progressText.anchor = CenterAnchor;

        this.progress = 0;
        this.assetLoader = new AssetLoader("assets", {
            onLoadingUpdate: (loaded, total) => {
                this.progress = loaded / total * 100;
                this.progressText.text = `Loading ${this.progress}%`;
                this.loadingBar.progress = this.progress;
            },
            onLoadingComplete: (assets) => {
                callback(assets);
            }
        });
    }

    enter() {
        const center = this.center;
        const loadingBar = new LoadingBar(500, 6);

        loadingBar.sprite.x = center.x - loadingBar.width / 2;
        loadingBar.sprite.y = center.y - loadingBar.height / 2 + 50;

        this.progressText.position = center;
        this.stage.addChild(this.progressText);
        this.stage.addChild(loadingBar.sprite);

        this.progress = 0;
        this.loadingBar = loadingBar;

        this.loadAssets();
    }

    loadAssets() {
        const assetLoader = this.assetLoader;

        assetLoader.addImage("worm.head", "sprites/worm_head.png");
        assetLoader.addImage("worm.body", "sprites/worm_body.png");
        assetLoader.addImage("rock", "sprites/rock.png");
        assetLoader.addAudio("sound.eat", "sounds/eat.wav");

        assetLoader.load();
    }

}