import { BaseModelElement } from "./BaseModelElement"
import { RadiusInfo } from "./enums/RadiusInfo"
import { StateType } from "./enums/StateType"

export class Radius extends BaseModelElement{
    public value: number
    private _elementId: number


    constructor(radiusInfo:{});
    constructor(id:number,value:number,elementId:number);
    constructor(...arr :any[]){
        super()
        if(typeof arr[0]==="object" && arr[0] !== null){
            this._id=arr[0][RadiusInfo.id]
            this.value=arr[0][RadiusInfo.value]
            this._elementId=arr[0][RadiusInfo.elementId]
        }
        else{
            this._id=arr[0]
            this.value=arr[1]
            this._elementId=arr[2]
        }

        this.state=this._id===0 ? StateType.added : StateType.unchanged
    }


    to_dict(): {} {
        return {
            [RadiusInfo.id]:this._id,
            [RadiusInfo.value]:this.value,
            [RadiusInfo.elementId]:this._elementId
        }
    }
    to_dict_save(): {} {
        return {
            [RadiusInfo.id]:this._id,
            [RadiusInfo.value]:this.value,
            [RadiusInfo.elementId]:this._elementId
        }
    }

}