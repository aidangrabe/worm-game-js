/**
 * This class is responsible for keeping track of the Score in the game.
 */
class ScoreKeeper extends Actor {

    constructor() {
        // no Sprite for this class
        super(null);

        this.score = 0;
        this.baseScoreNumber = 10;
        this.multiplier = 1;
    }

    /**
     * Increment the score, using the multiplier.
     */
    increment() {
        this.score += this.baseScoreNumber * this.multiplier;

        this.multiplier += 0.5;
    }

    /**
     * Reset the score.
     */
    reset() {
        this.score = 0;
    }

    update(delta) {
        // TODO slowly decay the multiplier
    }

}