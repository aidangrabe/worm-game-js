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

    circlesIntersect(x0, y0, r0, x1, y1, r1) {
        return Math.hypot(x0-x1, y0-y1) <= (r0 + r1);
    }

}

/**
 * Utility class containing some utility methods.
 */
const Util = {
    Math: new _GameMath()
};
