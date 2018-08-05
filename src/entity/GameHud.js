/**
 * The HUD for the game to display the score.
 */
class GameHud extends Actor {

    constructor(screen, scoreKeeper) {
        const hudContainer = new Container();
        super(hudContainer);

        this.scoreText = new Text("Score: 0", Font.ScoreText);
        this.scoreText.x = 5;
        this.scoreText.y = 5;

        hudContainer.addChild(this.scoreText);

        this.gameOverText = this.createGameOverText(hudContainer);

        this.screen = screen;
        this.scoreKeeper = scoreKeeper;
        this.hudContainer = hudContainer;
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

    update(delta) {
        this.scoreText.text = `Score: ${this.scoreKeeper.score}`;
    }

    /**
     * Show the game over text.
     */
    showGameOver() {
        this.gameOverText.visible = true;
    }

}