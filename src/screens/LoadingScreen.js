
class LoadingScreen extends Screen {

    constructor(assets, callback) {
        super();

        this.assets = assets;

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
        const sprites = this.assets.sprite;
        const audio = this.assets.audio;

        for (const assetName in sprites) {
            assetLoader.addImage(assetName, sprites[assetName]);
        }

        for (const assetName in audio) {
            assetLoader.addAudio(assetName, audio[assetName]);
        }

        assetLoader.load();
    }

}