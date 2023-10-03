import { PointGeo } from "./PointGeo";

export abstract class GeoMath{
    public static  calculateAngle(x1:number, y1:number, x2:number, y2:number):number {
        var dx = x2 - x1;
        var dy = y2 - y1;
        var radians = Math.atan2(dy, dx);
        var degrees = radians * (180 / Math.PI);
        return degrees;
    }
    public static  findPointOnCircle(centerPoint:PointGeo, radius:number, angle:number):PointGeo{
        var pi = Math.PI;
        let angleRadian = angle * (pi/180)

        let x = centerPoint.x + radius * Math.cos(angleRadian)
        let y = centerPoint.y + radius * Math.sin(angleRadian)

        if (centerPoint.x == 0 && centerPoint.y == 0 && angle == 90) x = 0
        else if (centerPoint.x == 0 && centerPoint.y == 0 && angle == 180) y = 0
        else if ( centerPoint.x == 0 && centerPoint.y == 0 && angle == 270)x = 0
        else if ( centerPoint.x == 0 && centerPoint.y == 0 && angle == 360)y = 0
        return new PointGeo(x,y)
    }        
}