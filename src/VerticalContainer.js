/**
 * A Container object that displays items one below the other.
 */
class VerticalContainer extends Container {

    constructor(options = {}) {
        super();

        this.gravity = options.gravity

        this.nextPosition = 0;
    }

    addChild(child) {
        child.position.y = this.nextPosition;
        child.position.x = 0;

        this.nextPosition += child.height;

        super.addChild(child);
    }

    onChildrenChange() {
        if (this.gravity === "center") {
            for (let child of this.children) {
                child.x = this.width / 2 - child.width / 2;
            }
        }
    }

    /**
     * Center the container to the given point. Note, this must be called after
     * any children are added, or their heights have changed.
     * 
     * @param {Number} centerX the x coordinate to center the container on.
     * @param {Number} centerY the y coordinate to center the container on.
     */
    center(centerX, centerY) {
        this.x = centerX - this.width / 2;
        this.y = centerY - this.height / 2;
    }

}