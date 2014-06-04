// Rectangle.js
// @author Aidan Grabe

var Rectangle = function(x, y, width, height) {

    /**
     * Check if this rectangle intersects another
     * @param Rectangle rect the other rectangle to check against
     */
    this.intersects = function(rect) {
        return rect.x < this.x + this.width
            && rect.y < this.y + this.height
            && rect.y + rect.height > this.y
            && rect.x + rect.width > this.x;
    };

    this.left = function() {
        return this.y + this.height;
    };

    this.right = function() {
        return this.x + this.width;
    };

    this.set = function(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };

    this.set(x, y, width, height);
    
};
