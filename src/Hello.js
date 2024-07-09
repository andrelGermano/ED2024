/** Class representing a Hello. */
class Hello {

    constructor(msg = "World") {
        this.msg = msg;
    }

    toString() {
        return "Hello " + this.msg;
    }
}

export default Hello;