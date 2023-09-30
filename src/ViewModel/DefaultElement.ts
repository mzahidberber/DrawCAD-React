import { BaseElement } from "./BaseElement.js";


export class DefaultElement extends BaseElement{
    getSvg(): SVGElement {
        throw new Error("Method not implemented.");
    }
    setSVGElement(): void {
        throw new Error("Method not implemented.");
    }
    setElementInformation(): void {
        throw new Error("Method not implemented.");
    }

}