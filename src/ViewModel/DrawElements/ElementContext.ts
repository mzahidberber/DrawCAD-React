import { DrawElement } from "../../Model/DrawElement"
import { Circle } from "./Circle"
import { Default } from "./Default"
import { Line } from "./Line"
import { IElementObj } from "./abstract/IElementObj"

export class ElementContext{
    private _element:IElementObj | null=null
    private _elementType:new (element:DrawElement) => IElementObj = Default
    private _elementTypes:{ [name: number]: new (element:DrawElement) => IElementObj }={
        0:Line,
        1:Circle

    }
    public get elementObj() : IElementObj | null {
        return this._element
    }
    
    public setNull():void{
        this._element=null
        this._elementType=Default
    }

    public setElementType(elementType:number):void{
        this._element=null
        this._elementType= this._elementTypes[elementType]
    }

    public createElementInstance(element:DrawElement):IElementObj | null{
        if(this._elementType!=Default){
            this._element=new this._elementType(element)
            return this._element
        } 
        return null
    }



}