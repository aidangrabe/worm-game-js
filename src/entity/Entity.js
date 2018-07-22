class Entity {

}

class Actor extends Entity {

    constructor(sprite) {
        super();
        this.sprite = sprite;
        this.traits = [];
    }

    get height() {
        return this.sprite.height;
    }

    get width() {
        return this.sprite.width;
    }

    addTrait(trait) {
        trait.actor = this.sprite;
        this.traits.push(trait);
    }

    clearTraits() {
        this.traits = [];
    }

    removeTrait(trait) {
        const index = this.traits.indexOf(trait);
        if (index != -1) {
            this.traits.splice(index, 1);
        }
    }

    update(delta) {
        const traits = this.traits;
        for (const trait of traits) {
            trait.update(delta);
        }
    }

}