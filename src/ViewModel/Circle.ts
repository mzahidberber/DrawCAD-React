import { DrawElement } from "../Model/DrawElement";
import { Point } from "../Model/Point";
import { BaseElement } from "./BaseElement";


export class Circle extends BaseElement {
    private centerPoint:Point | null = null
    private radius:number| null = null

    constructor (){
        super()
    }
    public paint(context:CanvasRenderingContext2D | null) {
        if (context != null && this.centerPoint !=null && this.radius !=null ){
            context.beginPath();
            context.arc(this.centerPoint.x,this.centerPoint.y, this.radius, 0, 2 * Math.PI);
            context.stroke();
        }
    }

    public setElementInformation(element:DrawElement): void {
        this.centerPoint=element.points[0]
        this.radius=element.radiuses[0].value
        
    }

}