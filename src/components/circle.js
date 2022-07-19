// import using require
const Shape = require('./shape.js')
// declare class
class Circle extends Shape {
    calculateArea(r) {
     return  Math.PI*(5*5);
    }
}


// export class using module.exports
module.exports = Circle
