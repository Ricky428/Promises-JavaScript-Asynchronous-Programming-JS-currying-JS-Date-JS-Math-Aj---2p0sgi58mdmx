// import using require
const Shape = require('./shape')
// declare class
class Circle extends Shape {
    constructor() {
        this.r = r;
    };
    calculateArea(r) {
     return  Math.PI*(r*r);
    }
}


// export class using module.exports
module.exports = Circle
