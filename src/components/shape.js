// declare class
class Shape {
    constructor(shape) {
        this.length=5;
        this.breadth=5;
        this.color='red';
    }

    drawShape(shape) {
       
    }

    calculateArea() {
        return this.length * this.breadth;
    }
}

// export class using module.exports
module.exports = Shape; 
