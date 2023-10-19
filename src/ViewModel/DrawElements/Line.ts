
import { DrawElement } from "../../Model/DrawElement";
import { GeoMath } from "../../Controller/Helper/GeoMath"
import { PointGeo } from "../../Controller/Helper/PointGeo";
import { Point } from "../../Model/Point";
import { BaseElementAbstract } from "./abstract/BaseElementAbstract";
import { Color } from "../Others/Color";
export class Line extends BaseElementAbstract {
    private p1:Point | null =null
    private p2:Point | null =null
    
    constructor (element:DrawElement){
        super(element)
        this.p1=element.points[0]
        this.p2=element.points[1]
        console.log(element)
        if(element.layer)
            this._color=new Color(element.layer.pen.red,element.layer.pen.green,element.layer.pen.blue)
    }
    
    

    public paint(path:Path2D): void {
        if (this.p1 && this.p2){
            path.moveTo(this.p1.x,this.p1.y)
            path.lineTo(this.p2.x,this.p2.y)
        }
    }
    

    public boundaryRect(path:Path2D): void {
        if (this.p1 && this.p2){
            let aci=GeoMath.calculateAngle(this.p1.x, this.p1.y,this.p2.x, this.p2.y)
            path.moveTo(this.p1.x, this.p1.y)
            let a=GeoMath.findPointOnCircle(new PointGeo(this.p1.x, this.p1.y),20,aci+90)
            path.lineTo(a.x,a.y)
            let b=GeoMath.findPointOnCircle(new PointGeo(this.p2.x, this.p2.y),20,aci+90)
            path.lineTo(b.x,b.y)
            let c=GeoMath.findPointOnCircle(new PointGeo(this.p2.x, this.p2.y),20,aci+270)
            path.lineTo(c.x,c.y)
            let d=GeoMath.findPointOnCircle(new PointGeo(this.p1.x, this.p1.y),20,aci+270)
            path.lineTo(d.x,d.y)
            path.lineTo(this.p1.x, this.p1.y)
        }
        
    }

    click(): void {
        
    }
}

