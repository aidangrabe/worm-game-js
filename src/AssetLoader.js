/**
 * Simple class for loading images and sounds
 */
class AssetLoader {

    constructor(assetPath, listener) {
        this._listener = listener;

        this._assets = {};
        this._assetPath = ""; // TODO
        this._numAssetsToLoad = 0;
        this._numAssetsLoaded = 0;

        this._imagesToLoad = {};
        this._audioToLoad = {};
    }
    
    addImage(name, path) {
        this._imagesToLoad[name] = `${this._assetPath}/${path}`;
        this._numAssetsToLoad++;
    }

    addAudio(name, path) {
        this._audioToLoad[name] = `${this._assetPath}/${path}`;
        this._numAssetsToLoad++;
    }

    load() {
        for (let name in this._imagesToLoad) {
            this._loadImage(name, this._imagesToLoad[name]);
        }

        for (let name in this._audioToLoad) {
            this._loadAudio(name, this._audioToLoad[name])
        }
    }

    _loadImage(name, path) {
        let image = new Image();

        image.onload = () => {
            this._onAssetLoaded(name, image);
        }
        image.src = this._imagesToLoad[name];
    }

    _loadAudio(name, path) {
        let audio = new Audio(this._audioToLoad[name]);
        audio.addEventListener('canplaythrough', () => {
            this._onAssetLoaded(name, new Audio(audio.src));
        });
    }

    // check if all assets are loaded and notify the listener if necessary
    _checkComplete() {
        if (this._numAssetsLoaded == this._numAssetsToLoad) {
            let audio = this._listener.onLoadingComplete(this._assets);
        }
    }

    _onAssetLoaded(name, path) {
        this._assets[name] = path;
        this._numAssetsLoaded++;
        this._updateListeners();
        this._checkComplete();
    }

    _updateListeners() {
        this._listener.onLoadingUpdate(this._numAssetsLoaded, this._numAssetsToLoad);
    }

}