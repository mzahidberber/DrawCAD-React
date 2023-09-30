import { BaseModelElement } from "./BaseModelElement"
import { SSAngleInfo } from "./enums/SSAngle"
import { StateType } from "./enums/StateType"

export class SSAngle extends BaseModelElement{
    private _type: string
    public value: number
    private _elementId: number


    constructor(ssangleInfo:{});
    constructor(id:number,type:string,value:number,elementId:number);
    constructor(...arr :any[]){
        super()
        if(typeof arr[0]==="object" && arr[0] !== null){
            this._id=arr[0][SSAngleInfo.id]
            this._type=arr[0][SSAngleInfo.type]
            this.value=arr[0][SSAngleInfo.value]
            this._elementId=arr[0][SSAngleInfo.elementId]
        }
        else{
            this._id=arr[0]
            this._type=arr[1]
            this.value=arr[2]
            this._elementId=arr[3]
        }

        this.state=this._id===0 ? StateType.added : StateType.unchanged
    }


    to_dict(): {} {
        return {
            [SSAngleInfo.id]:this._id,
            [SSAngleInfo.type]:this._type,
            [SSAngleInfo.value]:this.value,
            [SSAngleInfo.elementId]:this._elementId
        }
    }
    to_dict_save(): {} {
        return {
            [SSAngleInfo.id]:this._id,
            [SSAngleInfo.type]:this._type,
            [SSAngleInfo.value]:this.value,
            [SSAngleInfo.elementId]:this._elementId
        }
    }

}