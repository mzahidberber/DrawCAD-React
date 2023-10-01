import { DrawElement } from "../../Model/DrawElement";
import { IElementObj } from "./IElementObj";


export abstract class BaseElementAbstract implements IElementObj{
    abstract boundaryRect(): void
    abstract setElementInformation(element:DrawElement):void
    abstract paint(context:CanvasRenderingContext2D | null):void
    abstract click(x:number,y:number):void
}