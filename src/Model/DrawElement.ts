import { BaseModelElement } from "./BaseModelElement"
import { Point } from "./Point"
import { Radius } from "./Radius"
import { SSAngle } from "./SSAngle"
import { ElementInfo } from "./enums/ElementInfo"
import { StateType } from "./enums/StateType"

export class DrawElement extends BaseModelElement{
    public penId: number
    public elementTypeId: number
    public layerId: number
    // public _layerName:string
    public ssAngles: Array<SSAngle>
    public radiuses: Array<Radius>
    public points: Array<Point>

    constructor(elementInfo:{});
    constructor(id:number,penId:number,elementTypeId:number,layerId:number,points:Point[],radiuses:Radius[],ssangles:SSAngle[]);
    constructor(...arr :any[]){
        super()
        if(typeof arr[0]==="object" && arr[0] !== null){
            this._id=arr[0][ElementInfo.id]
            this.penId=arr[0][ElementInfo.penId]
            this.elementTypeId=arr[0][ElementInfo.typeId]
            this.layerId=arr[0][ElementInfo.layerId]
            this.points=arr[0][ElementInfo.points].map((e:{})=>new Point(e))
            this.radiuses=arr[0][ElementInfo.radiuses].map((e:{})=>new Radius(e))
            this.ssAngles=arr[0][ElementInfo.ssAngles].map((e:{})=>new SSAngle(e))
        }
        else{
            this._id=arr[0]
            this.penId=arr[1]
            this.elementTypeId=arr[2]
            this.layerId=arr[3]
            this.points=arr[4]
            this.radiuses=arr[5]
            this.ssAngles=arr[6]
        }
        this.state=this._id===0 ? StateType.added : StateType.unchanged
    }


    to_dict(): {} {
        throw new Error("Method not implemented.");
    }
    to_dict_save(): {} {
        throw new Error("Method not implemented.");
    }
    
}