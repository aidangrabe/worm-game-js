// LoadingScreen.js
// @author Aidan Grabe

var LoadingScreen = function(loadingCompleteCallback) {
    var me = this;

    var assetLoader;
    var progress;

    var loadAssets = function() {
        assetLoader.addImage("worm.head", "sprites/worm_head.png");
        assetLoader.addImage("worm.body", "sprites/worm_body.png");
        assetLoader.addImage("rock", "sprites/rock.png");
        assetLoader.addAudio("sound.eat", "sounds/eat.wav");
    };

    var onFinish = function() {};

    var onStart = function() {
        progress = 0;
        assetLoader = new AssetLoader("assets", {
            onLoadingUpdate: function(progress) {
                me.progress = progress;
            },
            onLoadingComplete: function(assets) {
                console.log("Loading complete");
                console.log(assets);
                loadingCompleteCallback(assets);
            }

        });
        // assetLoader = new AssetLoader({
        //     onLoadingUpdate: function(progress) {
        //         me.progress = progress;
        //     },
        //     onLoadingComplete: function(assets) {
        //         console.log("Loading complete");
        //         console.log(assets);
        //         loadingCompleteCallback(assets);
        //     }
        // });

        loadAssets();

        assetLoader.load();
    };

    var update = function(delta) {
        
    };

    var render = function(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        var loadingBarColour = "#DF4D4D";

        // loading bar
        ctx.fillStyle = loadingBarColour;
        ctx.strokeStyle = loadingBarColour;

        var margin = 40;
        var yy = canvas.height / 2;
        var width = canvas.width - margin * 2;

        ctx.strokeRect(margin - 1, yy - 5, width + 2, 10);
        var percent = (width / 100) * me.progress * 100;

        ctx.fillRect(margin, yy - 4, percent, 8);

        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText("Loading", canvas.width / 2, yy - 30);
    };

    return {
        onFinish: onFinish,
        onStart: onStart,
        render: render,
        update: update,
    };

};
