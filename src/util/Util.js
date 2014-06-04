// Util.js
// @author Aidan Grabe

var Util = {};

(function() {
    
    var myMath = {};
    myMath.random = function(min, max) {
        min = min || 0;
        max = max || 1;
        return Math.random() * (max - min) + min;
    }
    Util.Math = myMath;

})();
