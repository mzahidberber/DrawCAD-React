import { DrawElement } from "../../Model/DrawElement";
import { IElementObj } from "./IElementObj";


export abstract class BaseElementAbstract implements IElementObj{
    path: Path2D | null=null
    abstract boundaryRect(context: CanvasRenderingContext2D | null): Path2D | null 
    abstract setElementInformation(element:DrawElement):void
    abstract paint(context:CanvasRenderingContext2D | null):void
    abstract click(x:number,y:number):void
}