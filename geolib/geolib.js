var pi = 3.14
var calcAreaOfSquare = function(x,y){
    var calcAreaOfSquare = x*y
    return calcAreaOfSquare
}
var calcAreaOfCircle = function(r){
    var calcAreaOfCircle = r*r*pi
    return calcAreaOfCircle
}
var calcVolumeOfCube = function(x,y,z){
    var calcVolumeOfCube = x*y*z
    return calcVolumeOfCube
}
var angle = function lineAngle(line){
    return angleToDegrees(Math.atan2(line[1][1] - line[0][1], line[1][0] - line[0][0]));
  }
var geolib = {
    calcAreaOfSquare: calcAreaOfSquare,
    calcAreaOfCircle: calcAreaOfCircle,
    calcVolumeOfCube: calcVolumeOfCube
}
module.exports = geolib
module.exports = angle