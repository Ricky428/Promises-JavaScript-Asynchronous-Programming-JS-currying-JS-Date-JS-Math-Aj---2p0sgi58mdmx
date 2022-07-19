// declare class
class Shape {
    constructor(shape) {
        this.length=length;
        this.breadth=breadth;
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
