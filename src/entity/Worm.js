//

var Worm = function() {

    var me = this;
    var angle;
    var bodyParts = [];
    var bodyPartPool = [];
    var sprite = window.assets["worm.head"];
    var x, y;
    var step;
    var rotSpeed, speed;

    var turn = function(direction) {
        angle += direction * rotSpeed;
    };

    var createBodyPart = function() {
        var bodyPart;
        if (bodyPartPool.length > 0) {
            bodyPart = bodyPartPool.pop();
        } else {
            bodyPart = new WormBodyPart();
        }
        bodyPart.onCreate(x - 8, y - 8);
        bodyParts.push(bodyPart);
    };
    
    var onCreate = function() {
        angle = 45;
        speed = 50;
        step = 0;
        rotSpeed = 5;
        x = 0;
        y = 0;
        for (var i = 0; i < 10; i++) {
            createBodyPart();
        }
    };

    var update = function(delta) {
        step++;

        if (angle >= 360) {
            angle = 0;
        } else if (angle < 0) {
            angle = 360;
        }

        x += Math.cos(Math.PI / 180 * angle) * speed * delta;
        y += Math.sin(Math.PI / 180 * angle) * speed * delta;

        for (var bodyPart in bodyParts) {
            bodyParts[bodyPart].update(delta);
        }

        if (step % 5 == 0) {
            var bodyPart = bodyParts.splice(0, 1)[0];
            bodyPart.kill();
            bodyPartPool.push(bodyPart);

            createBodyPart();
        }

        if (x < 0) { x = canvas.width; }
        if (y < 0) { y = canvas.height; }
        if (x > canvas.width) { x = 0; }
        if (y > canvas.height) { y = 0; }
    };

    var render = function(ctx) {
        for (var bodyPart in bodyParts) {
            bodyParts[bodyPart].render(ctx);
        }

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.PI / 180 * angle);
        ctx.drawImage(sprite, -8, -8);
        ctx.restore();
    };

    return {
        getPosition: function() {return {x: x, y: y}},
        onCreate: onCreate,
        render: render,
        turn: turn,
        update: update
    };

};


Direction = {
    LEFT: -1,
    RIGHT: 1
};
