
class LoadingScreen extends Screen {

    constructor(assets, soundInstance, callback) {
        super();

        this.assets = assets;
        this.soundInstance = soundInstance;
        this.callback = callback;

        this.progressText = new Text("Loading 0%", Font.LoadingScreen);
        this.progressText.anchor = CenterAnchor;
    }

    updateLoadingUi(progress) {
        this.progressText.text = `Loading ${progress}%`;
        this.loadingBar.progress = progress;
    }

    enter() {
        const center = this.center;
        const loadingBar = new LoadingBar(500, 6);

        loadingBar.sprite.x = center.x - loadingBar.width / 2;
        loadingBar.sprite.y = center.y - loadingBar.height / 2 + 50;

        this.progressText.position = center;
        this.stage.addChild(this.progressText);
        this.stage.addChild(loadingBar.sprite);

        this.loadingBar = loadingBar;

        this.loadAssets();
    }

    loadAssets() {
        const sprites = this.assets.sprite;
        const audio = this.assets.audio;

        // load images
        for (const assetName in sprites) {
            Loader.add(sprites[assetName]);
        }
        
        // load audio
        for (const id in audio) {
            this.soundInstance.registerSound(id, audio[id]);
            Loader.add(audio[id]);
        }

        Loader.onProgress.add((e) => this.updateLoadingUi(e.progress));
        Loader.load((loader, resources) => {
            this.callback(resources);
        });
    }

}