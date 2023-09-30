import { Circle } from "./Circle.js"
import { Line } from "./Line.js"
import { BaseElement } from "./BaseElement.js";
import { DefaultElement } from "./DefaultElement.js";
export class ElementContext{
    private _defaultElement:BaseElement=new DefaultElement()
    private _element:BaseElement=this._defaultElement
    private _elementTypes:{ [name: number]: typeof BaseElement }={
        0:Line,
        1:Circle

    }
    
    public getElementObj():BaseElement{
        if (this._element===this._defaultElement){
            throw new Error("ElementContext:Must Set Element")
        }
        return this._element
    }

    public setDefaultObj():void{
        this._element=this._defaultElement
    }

    public setElementObj(elementType:number):BaseElement{
        var ElementType= this._elementTypes[elementType]
        this._element=new ElementType()
        return this._element
    }



}