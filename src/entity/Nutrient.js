// Nutrient.js
// @author Aidan Grabe

var Nutrient = function(startX, startY) {
    var me = this;

    var x = startX,
        y = startY;
    var width   = 8,
        height  = 8;

    var bounds = new Rectangle(x, y, width, height);
    
    this.bounds = function() {
        return bounds;
    };

    this.jump = function(width, height) {
        x = Util.Math.random(0, width);
        y = Util.Math.random(0, height);
    };

    this.update = function(delta) {
        
    };

    this.render = function(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(x, y, width / 2, 0, Math.PI * 2);
        ctx.fill();
    };

};
