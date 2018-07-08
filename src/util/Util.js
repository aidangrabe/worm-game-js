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

}

/**
 * Utility class containing some utility methods.
 */
const Util = {
    Math: new _GameMath()
};
