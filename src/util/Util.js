/**
 * Utility class containing some game-math related functions. Obviously :P
 */
class _GameMath {

    /**
     * Get a random number between two boundaries min and max.
     * 
     * @param {Number} min the minimum value that can be returned.
     * @param {Number} max the maximum value that can be returned.
     */
    random(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * Check whether two circles intersect.
     * 
     * @param {Number} x0 x value of the center of the first circle.
     * @param {Number} y0 y value of the center of the first circle.
     * @param {Number} r0 the radius of the first circle.
     * @param {Number} x1 x value of the center of the second circle.
     * @param {Number} y1 y value of the center of the second circle.
     * @param {Number} r1 the radius of the second circle.
     */
    circlesIntersect(x0, y0, r0, x1, y1, r1) {
        return Math.hypot(x0 - x1, y0 - y1) <= (r0 + r1);
    }

    /**
     * Check wheter the given point is inside the given circle.
     * 
     * @param {Number} x of the point to check.
     * @param {*} y of the point to check.
     * @param {*} cx x value of the center of the circle.
     * @param {*} cy y value of the center of the circle.
     * @param {*} radius the radius of the circle. 
     */
    pointInCircle(x, y, cx, cy, radius) {
        const distSquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
        return distSquared <= radius * radius;
    }

}

/**
 * Utility class containing some utility methods.
 */
const Util = {
    Math: new _GameMath()
};
