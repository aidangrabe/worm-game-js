// Nutrient.js
// @author Aidan Grabe

var Nutrient = function(startX, startY) {
    var me = this;

    var x = startX,
        y = startY;
    var width   = 8,
        height  = 8;

    var bounds = new Rectangle(x - width / 2, y - height / 2, width, height);
    
    this.getBounds = function() {
        return bounds;
    };

    this.getPosition = function() {
        return {
            x: x,
            y: y
        };
    };

    this.jump = function(maxWidth, maxHeight) {
        x = Util.Math.random(0, maxWidth);
        y = Util.Math.random(0, maxHeight);
        bounds.set(x - width / 2, y - height / 2, width, height);
    };

    this.update = function(delta) {
        
    };

    this.render = function(ctx) {
        ctx.beginPath();
        ctx.arc(x, y, width / 2, 0, Math.PI * 2);
        ctx.fill();
    };

};
