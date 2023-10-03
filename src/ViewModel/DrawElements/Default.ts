import { BaseElementAbstract } from "./abstract/BaseElementAbstract";



export class Default extends BaseElementAbstract {
    boundaryRect(path:Path2D): void {
        throw new Error("Method not implemented.");
    }
    paint(path:Path2D): void {
        throw new Error("Method not implemented.");
    }
    click(x: number, y: number): void {
        throw new Error("Method not implemented.");
    }


}