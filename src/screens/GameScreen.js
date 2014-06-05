// GameScreen.js
// @author Aidan Grabe

var GameScreen = function() {
    var worm;
    var earthCanvas;
    var earthCtx;
    var nutrient;
    var eatSound;

    var createCanvas = function(colour) {
        var c = document.createElement('canvas');
        c.width = canvas.width;
        c.height = canvas.height;
        cCtx = c.getContext('2d');
        cCtx.fillStyle = colour;
        cCtx.fillRect(0, 0, c.width, c.height);

        c.style.position = "absolute";
        c.style.left = canvas.offsetLeft + "px";
        c.style.zIndex = -1;
        document.body.appendChild(c);

        return cCtx;
    };

    var onFinish = function() {};

    var onStart = function() {
        bgCtx = createCanvas("#653A17");
        earthCtx = createCanvas("#945823");
        earthCtx.globalCompositeOperation = "destination-out";
        for (var i = 0; i < 10; i++) {
            bgCtx.drawImage(window.assets.rock, Math.random() * canvas.width, 
                                Math.random() * canvas.height);
        }

        worm = new Worm();
        worm.onCreate();

        nutrient = new Nutrient(0, 0);
        nutrient.jump(canvas.width, canvas.height);

        eatSound = window.assets['sound.eat'];
    };

    var update = function(delta) {
        // worm movement
        if (Input.isKeyDown(Keys.RIGHT)) {
            worm.turn(Direction.RIGHT);
        } else if (Input.isKeyDown(Keys.LEFT)) {
            worm.turn(Direction.LEFT);
        }

        worm.update(delta);

        if (worm.getBounds().intersects(nutrient.getBounds())) {
            nutrient.jump(canvas.width, canvas.height);
            worm.increaseLength(5);
            eatSound.play();
            setTimeout(function() {
                var a = new Audio(eatSound.src);
                a.play();
            }, 50);
        }
    };

    var render = function(ctx) {
        var pos = worm.getPosition();
        earthCtx.beginPath();
        earthCtx.arc(pos.x, pos.y, 8, 2 * Math.PI, false);
        earthCtx.fillStyle = "green";
        earthCtx.fill();

        worm.render(ctx);
        nutrient.render(ctx);
    };

    return {
        onFinish: onFinish,
        onStart: onStart,
        render: render,
        update: update
    };

}
