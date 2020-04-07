"use strict";

//import linear-lib
import * as linear from './linear-lib-master/library.js';

const pi = Math.PI;


//return an object with an array of points
export function getObjFromPoints(points) {
  return new Obj(new linear.Shape(points))
}

//basic shape object. shape is a linearlib shape
export class Obj {
  constructor(shape, mass = 1) {
    this.shape = shape;
    this.mass = mass;
  }
}
