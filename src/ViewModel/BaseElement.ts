import { DrawElement } from "../Model/DrawElement";
import { BaseElementAbstract } from "./abstract/BaseElementAbstract";

export class BaseElement extends BaseElementAbstract{
    boundaryRect(context: CanvasRenderingContext2D | null): Path2D | null  {
        throw new Error("Method not implemented.");
    }
    click(x:number,y:number): void {
        throw new Error("Method not implemented.");
    }
    setElementInformation(element: DrawElement): void {
        throw new Error("Method not implemented.");
    }
    paint(context: CanvasRenderingContext2D | null): void {
        throw new Error("Method not implemented.");
    }

}