export class CustomSVGElement {
    private _svg:SVGElement

    get svg():SVGElement{
        return this._svg
    }

    constructor(type:string) {
        this._svg=document.createElementNS("http://www.w3.org/2000/svg", type);
        this._svg.addEventListener("click",this.click)
        
    }

    public setAttribute(key:string,value:string):void{
        this._svg.setAttribute(key, value);
    }
    public setAttributes(attributes:{[index: string]: string}):void{
        for (let key in attributes){
            let value = attributes[key]
            this._svg.setAttribute(key, value);
        }
    }
    public appendChild(child:SVGElement){
        this._svg.appendChild(child)
    }

    public click(ev:MouseEvent){
        // console.log(ev.x)
    }
    
    public setColor(r:number,g:number,b:number){
        this._svg.setAttribute("stroke", `rgb(${r.toString()},${g.toString()},${b.toString()})`);
    }

    public setStrokeWidth(width:number){
        this._svg.setAttribute("stroke-width", width.toString());
    }

    public setStroke(stroke:string){
        this._svg.setAttribute("stroke", stroke);
    }

    public setR(r:number){
        this._svg.setAttribute("stroke:rgb(255,0,0);", r.toString());
    }

    public setCx(cx:number){
        this._svg.setAttribute("cx", cx.toString());
    }

    public setCy(cy:number){
        this._svg.setAttribute("cy", cy.toString());
    }

    public setX1(x1:number){
        this._svg.setAttribute("x1", x1.toString());
    }

    public setY1(y1:number){
        this._svg.setAttribute("y1", y1.toString());
    }

    public setX2(x2:number){
        this._svg.setAttribute("x2", x2.toString());
    }

    public setY2(y2:number){
        this._svg.setAttribute("y2", y2.toString());
    }

    public setHeight(height:number){
        this._svg.setAttribute("height", height.toString());
    }

    public setWidth(width:number){
        this._svg.setAttribute("width", width.toString());
    }

    
    
}

