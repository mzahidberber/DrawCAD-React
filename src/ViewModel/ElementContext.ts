import { Circle } from "./Circle"
import { Line } from "./Line"
import { BaseElement } from "./BaseElement";
export class ElementContext{
    private _element:BaseElement | null=null
    private _elementTypes:{ [name: number]: typeof BaseElement }={
        0:Line,
        1:Circle

    }
    
    
    public get elementObj() : BaseElement | null {
        return this._element
    }
    
    public setObjNull():void{
        this._element=null
    }

    public setElementObj(elementType:number):BaseElement{
        var ElementType= this._elementTypes[elementType]
        this._element=new ElementType()
        return this._element
    }



}