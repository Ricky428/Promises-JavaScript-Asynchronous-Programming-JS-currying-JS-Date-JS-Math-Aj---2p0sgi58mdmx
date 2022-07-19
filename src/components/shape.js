// declare class
class Shape {
    constructor(shape) {
        this.length=length;
        this.breadth=breadth;
        this.style= {color : 'red'};
    }

    drawShape(shape) {
       
    }

    calculateArea(length,breadth) {
        return this.length * this.breadth;
    }
}

// export class using module.exports
module.exports = Shape; 
