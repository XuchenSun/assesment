import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      let distance=0;// let is better than var because it use less memory
      distance=(Point.x-center.x)*(Point.x-center.x)+(Point.y-center.y)*(Point.y-center.y);//get the distance*distance
      distance=Math.sqrt(distance);//get the distance
      return distance <= radius;// method one
      // method two
      // if(distance>radius) return false
      // else return true
      // Comments method one is more quick when the program is running but method two is easier to understand
    }
  }
}
