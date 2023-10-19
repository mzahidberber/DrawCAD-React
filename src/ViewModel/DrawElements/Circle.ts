
import { DrawElement } from "../../Model/DrawElement";
import { Point } from "../../Model/Point";
import { BaseElementAbstract } from "./abstract/BaseElementAbstract";


export class Circle extends BaseElementAbstract {
    private p1:Point | null =null
    private p2:Point | null =null
    private radius:number | null =null

    constructor (element:DrawElement){
        super(element)
        this.p1=element.points[0]
        this.p2=element.points[1]
        this.radius=element.radiuses[0].value
    }
    public paint(path:Path2D) {
        if(this.p1 && this.radius)
            path.arc(this.p1.x,this.p1.y,this.radius,0,360)
    }

    boundaryRect(path:Path2D):void {
        if(this.p1 && this.p2 && this.radius){
            path.arc(this.p1.x,this.p1.y,this.radius+10,0,2*Math.PI,false)
            path.lineTo(this.p1.x+(this.radius-10),this.p1.y)
            path.arc(this.p1.x,this.p1.y,this.radius-10,2*Math.PI,0,true)
            path.closePath()
        }
            
    }

    click(): void {
        throw new Error("Method not implemented.");
    }


}