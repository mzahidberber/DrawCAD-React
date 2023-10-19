import { DrawElement } from "./DrawElement"
import { Pen } from "./Pen"
import { BaseModelElementAbstract } from "./abstract/BaseModelElementAbstract"
import { LayerInfo } from "./enums/LayerInfo"
import { StateType } from "./enums/StateType"

export class Layer extends BaseModelElementAbstract{
    private _name: string
    private _lock: boolean
    private _visibility: boolean
    private _thickness: number
    private _drawBoxId: number
    private _penId: number
    private _pen: Pen
    private _elements: DrawElement[]=[]

    
    public get name() : string {
        return this._name
    }
    
    public set name(n : string) {
        if(this.state != StateType.added) this.state=StateType.update
        this._name = n
    }

    public get lock() : boolean {
        return this._lock
    }
    
    public set lock(l : boolean) {
        if(this.state != StateType.added) this.state=StateType.update
        this._lock = l
    }

    public get visibility() : boolean {
        return this._visibility
    }
    
    public set visibility(v : boolean) {
        if(this.state != StateType.added) this.state=StateType.update
        this._visibility = v
    }

    public get thickness() : number {
        return this._thickness
    }
    
    public set thickness(t : number) {
        if(this.state != StateType.added) this.state=StateType.update
        this._thickness = t
    }
    public get drawBoxId() : number {
        return this._drawBoxId
    }
    
    public set drawBoxId(id : number) {
        if(this.state != StateType.added) this.state=StateType.update
        this._drawBoxId = id
    }

    public get penId() : number {
        return this._penId
    }
    
    public set penId(id : number) {
        if(this.state != StateType.added) this.state=StateType.update
        this._penId = id
    }

    public get pen() : Pen{
        return this._pen
    }
    
    public set pen(pen : Pen) {
        if(this.state != StateType.added) this.state=StateType.update
        this._pen = pen
    }

    public get elements() : DrawElement[] {
        return this._elements
    }
    
    public set elements(elements : DrawElement[]) {
        if(this.state != StateType.added) this.state=StateType.update
        this._elements = elements
    }

    constructor(layerInfo:{});
    constructor(id:number,name:string,lock:boolean,thickness:number,visibility:boolean,drawBoxId:number,pen:Pen);
    constructor(...arr :any[]){
        super()
        if(typeof arr[0]==="object" && arr[0] !== null){
            this._id=arr[0][LayerInfo.id]
            this._name=arr[0][LayerInfo.lname]
            this._lock=arr[0][LayerInfo.lock]
            this._thickness=arr[0][LayerInfo.thickness]
            this._visibility=arr[0][LayerInfo.visibility]
            this._drawBoxId=arr[0][LayerInfo.drawBoxId]
            this._penId=arr[0][LayerInfo.penId]
            this._pen=arr[0][LayerInfo.pen]

            
            if(arr[0][LayerInfo.elements]){
                let elementsInfo=arr[0][LayerInfo.elements] as []
                this._elements=elementsInfo.map((x)=>new DrawElement(x)) 
                this._elements.forEach(e => {
                    e.layerName=this.name
                })
                this.state=this._id===0 ? StateType.added : StateType.unchanged
            }
            
        }
        else{
            this._id=arr[0]
            this._name=arr[1]
            this._lock=arr[2]
            this._thickness=arr[3]
            this._visibility=arr[4]
            this._drawBoxId=arr[5]
            this._penId=arr[6].id
            this._pen=arr[6]

            this.state=StateType.added
            
        }

    }


    to_dict(): {} {
        return {
            [LayerInfo.id]:this._id,
            [LayerInfo.lname]:this._name,
            [LayerInfo.lock]:this._lock,
            [LayerInfo.visibility]:this._visibility,
            [LayerInfo.thickness]:this._thickness,
            [LayerInfo.drawBoxId]:this._drawBoxId,
            [LayerInfo.penId]:this._penId,
        }
    }
    to_dict_save(): {} {
        return {
            [LayerInfo.id]:this._id,
            [LayerInfo.lname]:this._name,
            [LayerInfo.lock]:this._lock,
            [LayerInfo.visibility]:this._visibility,
            [LayerInfo.thickness]:this._thickness,
            [LayerInfo.drawBoxId]:this._drawBoxId,
            [LayerInfo.penId]:this._penId,
            [LayerInfo.pen]:this._pen?.to_dict_save(),
            [LayerInfo.elements]:this._elements.map((x)=>x.to_dict_save()),
        }
    }

}