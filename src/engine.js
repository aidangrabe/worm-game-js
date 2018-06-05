// Engine.js
// @author Aidan Grabe

// shim for requestAnimationFrame
var requestAnimFrame = (function(){
    return window.requestAnimationFrame     || window.webkitRequestAnimationFrame  ||
        window.mozRequestAnimationFrame     || window.oRequestAnimationFrame       ||
        window.msRequestAnimationFrame      ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 480;
canvas.height = 320;
document.body.appendChild(canvas);

var Engine = function(game) {
    var me = this;
    var lastTime = Date.now();

    var gameLoop = function() {
        var now = Date.now();
        var deltaTime = (now - lastTime) / 1000.0;

        game.update(deltaTime);
        game.render(ctx);

        lastTime = now;
        requestAnimFrame(gameLoop);
    }

    var start = function() {
        game.game = me;
        game.canvas = canvas;
        game.onStart();
        gameLoop();
    };

    return {
        height: canvas.height,
        start: start,
        width: canvas.width
    };
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
