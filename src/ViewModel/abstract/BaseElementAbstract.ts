import { Scene } from "../../View/Scene.js";
import { DrawElement } from "../../Model/DrawElement.js";
import { CustomSVGElement } from "../CustomSVGElement.js";
import { IElementObj } from "./IElementObj.js";


export abstract class BaseElementAbstract implements IElementObj{
    abstract boundaryRect(): void
    abstract setElementInformation(element:DrawElement):void
    abstract paint(context:CanvasRenderingContext2D | null):void
    abstract click(x:number,y:number):void
}