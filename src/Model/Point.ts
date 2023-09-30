import { BaseModelElement } from "./BaseModelElement"
import { PointInfo } from "./enums/PointInfo"
import { StateType } from "./enums/StateType"

export class Point extends BaseModelElement{
    public x: number
    public y: number
    public z: number=1
    private _elementId: number
    private _pointTypeId: number


    constructor(pointInfo:{});
    constructor(id:number,x:number,y:number,elementId:number,pointTypeId:number);
    constructor(...arr :any[]){
        super()
        if(typeof arr[0]==="object" && arr[0] !== null){
            this._id=arr[0][PointInfo.id]
            this.x=arr[0][PointInfo.x]
            this.y=arr[0][PointInfo.y]
            this._elementId=arr[0][PointInfo.elementId]
            this._pointTypeId=arr[0][PointInfo.pointTypeId]
        }
        else{
            this._id=arr[0]
            this.x=arr[1]
            this.y=arr[2]
            this._elementId=arr[3]
            this._pointTypeId=arr[4]
        }

        this.state=this._id===0 ? StateType.added : StateType.unchanged
    }


    to_dict(): {} {
        return {
            [PointInfo.id]:this._id,
            [PointInfo.x]:this.x,
            [PointInfo.y]:this.y,
            [PointInfo.elementId]:this._elementId,
            [PointInfo.pointTypeId]:this._pointTypeId
        }
    }
    to_dict_save(): {} {
        return {
            [PointInfo.id]:this._id,
            [PointInfo.x]:this.x,
            [PointInfo.y]:this.y,
            [PointInfo.elementId]:this._elementId,
            [PointInfo.pointTypeId]:this._pointTypeId
        }
    }

}