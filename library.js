"use strict";

//import linear-lib
import * as linear from './linear-lib-master/library.js';

const pi = Math.PI;


//return an object with an array of points
export function getObjFromPoints(points) {
  return new Obj(new linear.Shape(points))
}

//basic shape object. shape is an array of [x,y] points
export class Obj {
  constructor(shape, mass = 1, xvel = 0, yvel = 0, avel = 0) {
    this.points = shape;
    this.mass = mass;
    this.xvel = xvel; //x velocity
    this.yvel = yvel; //y velocity
    this.avel = avel; //angular velocity
  }
  //return point where this intersects one object
  testCollision(obj2) {
    var shape = linear.Shape()
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



//testing V

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var object = new Obj([250,200],[300,200],[300,250],[250,250]);

setInterval(function() {
  
  
  
  //draw
  ctx.beginPath();
  ctx.moveTo(object.points[0][0], object.points[0][1]);
  for (var i = 1; i < object.points; i++) {
    ctx.lineTo(object.points[i][0], object.points[i][1]);
  }
  ctx.stroke();
  ctx.closePath();
}, 1000/60)
