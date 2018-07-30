/**
 * Class for playing audio.
 */
class Sound {

    static registerSound(id, src) {
        createjs.Sound.registerSound({
            src: src,
            id: id
        });
    }

    static play(id) {
        createjs.Sound.play(id)
    }

}