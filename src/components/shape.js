// declare class
class Shape {
    constructor(shape) {
        this.length=length;
        this.breadth=breadth;
        this.style.color='color';
    }

    drawShape(shape) {
        this.style.color='red';
    }

    calculateArea(length,breadth) {
        return this.length * this.breadth;
    }
}

// export class using module.exports
module.exports = Shape; 
