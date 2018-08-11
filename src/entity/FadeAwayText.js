/**
 * Text that fades away over time.
 */
class FadeAwayText extends Actor {

    constructor(x, y, textString, listener) {
        // TODO font
        const text = new Text(textString, Font.EatScore);
        super(text);

        this.configureText(text);

        text.x = x;
        text.y = y;
        this.text = text;
        this.listener = listener;
    }

    update(delta) {
        super.update(delta);

        const text = this.text;

        // fade away
        text.alpha -= delta / 100;

        if (text.alpha <= 0) {
            this.listener.onTextFadedAway(this);
        }
    }

    configureText(text) {
        text.alpha = 1;
        return text;
    }

}