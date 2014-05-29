// ASsetLoader
// @author Aidan Grabe

var AssetLoader = function(loadingListener) {
    var assets = {};
    var imagesToLoad = {};
    var numLoaded = 0;
    var numToLoad = 0;

    var assetLoaded = function(name, asset) {
        console.log("Loaded asset: " + name);
        assets[name] = asset;
        numLoaded++;
        loadingListener.onLoadingUpdate(numLoaded / numToLoad);
        if (numLoaded == numToLoad) {
            loadingComplete();
        }
    };
    
    var queueImage = function(name, url) {
        console.log("Queuing asset: " + name);
        imagesToLoad[name] = url;
        numToLoad++;
    };

    var load = function() {
        for (var name in imagesToLoad) {
            var image = new Image();

            // keep the scope of the name variable by wrapping all this in it's
            // own function
            (function(image, name) {
                image.onload = function() {
                    assetLoaded(name, image);
                }
            })(image, name);

            image.src = imagesToLoad[name];
        }
    };

    var loadingComplete = function() {
        loadingListener.onLoadingComplete(assets);
    };

    return {
        load: load,
        queueImage: queueImage
    };

}
