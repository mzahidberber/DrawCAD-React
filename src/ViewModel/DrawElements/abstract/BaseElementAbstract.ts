
import { DrawElement } from "../../../Model/DrawElement";
import { IElementObj } from "./IElementObj";


export abstract class BaseElementAbstract implements IElementObj{
    protected _element:DrawElement
    constructor(element:DrawElement){
        this._element=element
    }
    path: Path2D | null=null
    abstract boundaryRect(path:Path2D): void
    abstract paint(path:Path2D):void
    abstract click(x:number,y:number):void
}