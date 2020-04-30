"use strict";


const pi = Math.PI;



//basic shape object. shape is an array of [x,y] points
class Obj {
  constructor(shape, mass = 1, xvel = 0, yvel = 0, avel = 0) {
    this.points = shape;
    //make sure last point is first point
    if (this.points[0] != this.points[this.points.length - 1]) {
      this.points.push(this.points[0]);
    }
    this.mass = mass;
    this.xvel = xvel; //x velocity
    this.yvel = yvel; //y velocity
    this.avel = avel; //angular velocity
  }
  //return point where this intersects one object
  testCollision(obj2) {
    var shape = Shape()
  }
  
  //return points where multiple objects intersect
  testCollisions(objs) {
    
  }
  
  //translate shape along x axis
  translateX(n) {
    
  }
  
  //translate shape along y axis
  translateY(n) {
    
  }
  
  update() {
    this.translateX(this.xvel);
    this.translateY(this.yvel);
  }
}
