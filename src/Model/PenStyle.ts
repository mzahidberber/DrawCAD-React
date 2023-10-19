import { BaseModelElementAbstract } from "./abstract/BaseModelElementAbstract"
import { PSInfo } from "./enums/PSInfo"

export class PenStyle extends BaseModelElementAbstract{
    public name: string


    constructor(penInfo:{});
    constructor(id:number,name:string);
    constructor(...arr :any[]){
        super()
        if(typeof arr[0]==="object" && arr[0] !== null){
            this._id=arr[0][PSInfo.id]
            this.name=arr[0][PSInfo.psname]
        }
        else{
            this._id=arr[0]
            this.name=arr[1]
        }

    }


    to_dict(): {} {
        return {
            [PSInfo.id]:this._id,
            [PSInfo.psname]:this.name,
        }
    }
    to_dict_save(): {} {
        return {
            [PSInfo.id]:this._id,
            [PSInfo.psname]:this.name,
        }
    }

}