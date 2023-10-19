import { PenStyle } from "./PenStyle"
import { BaseModelElementAbstract } from "./abstract/BaseModelElementAbstract"
import { PenInfo } from "./enums/PenInfo"
import { StateType } from "./enums/StateType"

export class Pen extends BaseModelElementAbstract{
    public name: string
    public red: number
    public blue: number
    public green: number
    public penStyleId: number
    private penStyle: PenStyle | null


    constructor(penInfo:{});
    constructor(id:number,name:string,red:number,blue:number,green:number,penStyleId:number);
    constructor(...arr :any[]){
        super()
        if(typeof arr[0]==="object" && arr[0] !== null){
            this._id=arr[0][PenInfo.id]
            this.name=arr[0][PenInfo.pname]
            this.red=arr[0][PenInfo.red]
            this.blue=arr[0][PenInfo.blue]
            this.green=arr[0][PenInfo.green]
            this.penStyleId=arr[0][PenInfo.penStyleId]


            this.penStyle= arr[0][PenInfo.penStyle] ? new PenStyle(arr[0][PenInfo.penStyle]) : null
        }
        else{
            this._id=arr[0]
            this.name=arr[1]
            this.red=arr[2]
            this.blue=arr[3]
            this.green=arr[4]
            this.penStyleId=arr[5]

            
            this.penStyle=new PenStyle(0,"solid")
        }

        this.state=this._id===0 ? StateType.added : StateType.unchanged
    }


    to_dict(): {} {
        return {
            [PenInfo.id]:this._id,
            [PenInfo.pname]:this.name,
            [PenInfo.red]:this.red,
            [PenInfo.blue]:this.blue,
            [PenInfo.green]:this.green,
            [PenInfo.penStyleId]:this.penStyleId
        }
    }
    to_dict_save(): {} {
        return {
            [PenInfo.id]:this._id,
            [PenInfo.pname]:this.name,
            [PenInfo.red]:this.red,
            [PenInfo.blue]:this.blue,
            [PenInfo.green]:this.green,
            [PenInfo.penStyleId]:this.penStyleId,
            [PenInfo.penStyle]:this.penStyle?.to_dict()
        }
    }

}