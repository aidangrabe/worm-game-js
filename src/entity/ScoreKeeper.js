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

        this.resetComboCounter();
    }

    /**
     * Increment the score, using the multiplier.
     */
    increment() {
        this.score += this.baseScoreNumber * this.multiplier;

        this.multiplier += 1;
        this.resetComboCounter();
    }

    /**
     * Reset the score.
     */
    reset() {
        this.score = 0;
    }

    update(delta) {
        // decrement the combo counter
        this.comboCounter -= delta;

        // check if the current multiplier has expired
        if (this.comboCounter < 0 && this.multiplier > 1) {
            this.multiplier -= 1;
            this.resetComboCounter();
        }
    }

    resetComboCounter() {
        // target fps * number of seconds for combo to last
        this.comboCounter = 60 * 2;
    }

}