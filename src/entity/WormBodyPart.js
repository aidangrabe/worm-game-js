//

var WormBodyPart = function() {
    var that = this;
    var sprite = window.assets["worm.body"];
    var alive;
    var x, y;

    var kill = function() {
        alive = false;
    };
    
    var onCreate = function(nx, ny) {
        alive = true;
        x = nx;
        y = ny;
    };
    
    var update = function(delta) {
    };
    
    var render = function(ctx) {
        if (alive) {
            ctx.drawImage(sprite, x, y);
        }
    };

    return {
        kill: kill,
        onCreate: onCreate,
        render: render,
        update: update
    };

}
