import { DrawElement } from "../../../Model/DrawElement"



export interface IElementObj{
    element:DrawElement
    path:Path2D | null
    paint(path:Path2D):void
    boundaryRect(path:Path2D):void
    click():void
}