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

        this.screen = screen;
        this.scoreKeeper = scoreKeeper;
    }

    update(delta) {
        this.scoreText.text = `Score: ${this.scoreKeeper.score}`;
    }

}