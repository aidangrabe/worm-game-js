/**
 * The HUD for the game to display the score.
 */
class GameHud extends Actor {

    constructor(screen, scoreKeeper) {
        const hudContainer = new Container();
        super(hudContainer);

        this.scoreText = this.createScoreText();
        this.gameOverText = this.createGameOverText(hudContainer);
        this.comboText = this.createComboText(hudContainer);

        hudContainer.addChild(this.scoreText);

        this.screen = screen;
        this.scoreKeeper = scoreKeeper;
        this.hudContainer = hudContainer;

        this.oldCombo = 1;
    }

    createScoreText() {
        const text = new Text("Score: 0", Font.ScoreText);
        text.x = 5;
        text.y = 5;
        return text;
    }

    createGameOverText(container) {
        const text = new Text("Game Over", Font.GameOver);
        text.anchor = {
            x: 0.5,
            y: 0.5
        };
        text.x = Game.WIDTH / 2;
        text.y = Game.HEIGHT / 2;
        text.visible = false;

        container.addChild(text);

        return text;
    }

    createComboText(container) {
        const text = new Text("1x", Font.ScoreText);
        text.anchor = { x: 1, y: 0 };

        text.x = Game.WIDTH - text.width - 5;
        text.y = 5;

        container.addChild(text);

        return text;
    }

    update(_) {
        const combo = this.scoreKeeper.multiplier;

        if (this.comboText.scale.x > 1.1) {
            this.comboText.scale.x *= 0.9;
            this.comboText.scale.y *= 0.9;
        } else {
            this.comboText.scale.x = 1;
        }

        if (this.oldCombo != combo) {
            // animate!
            this.comboText.scale.x = 2;
            this.comboText.scale.y = 2;

            this.calculateComboColor(combo);
        }
        this.oldCombo = combo;

        this.scoreText.text = `Score: ${this.scoreKeeper.score}`;
        this.comboText.text = `x${combo}`;
    }

    /**
     * Show the game over text.
     */
    showGameOver() {
        this.gameOverText.visible = true;
    }

    calculateComboColor(combo) {
        const comboTextStyle = this.comboText.style;

        if (combo >= 10) {
            comboTextStyle.fill = R.color.comboTextLarge;
        } else if (combo >= 7) {
            comboTextStyle.fill = R.color.comboTextMedium;
        } else if (combo >= 3) {
            comboTextStyle.fill = R.color.comboTextSmall;
        } else {
            comboTextStyle.fill = R.color.white;
        }
    }

}