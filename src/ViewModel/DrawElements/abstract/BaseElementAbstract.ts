
import { DrawElement } from "../../../Model/DrawElement";
import { Color } from "../../Others/Color";
import { IElementObj } from "./IElementObj";


export abstract class BaseElementAbstract implements IElementObj{
    protected _element:DrawElement
    protected _color:Color=new Color()

    
    public get color() : Color {
        return this.color
    }
    
    public set color(c: Color) {
        this._color = c
        if(this._element.layer){
            this._element.layer.pen.blue=c.blue
            this._element.layer.pen.green=c.green
            this._element.layer.pen.red=c.red
        }
            
    }

    public get element() : DrawElement {
        return this._element
    }
    
    constructor(element:DrawElement){
        this._element=element
    }
    path: Path2D | null=null
    abstract boundaryRect(path:Path2D): void
    abstract paint(path:Path2D):void
    abstract click():void
}