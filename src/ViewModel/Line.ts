import { Point } from "../Model/Point";
import { DrawElement } from "../Model/DrawElement";
import { BaseElement } from "./BaseElement";

export class Line extends BaseElement {
    private p1:Point | null =null
    private p2:Point | null =null
    constructor (){
        super()
    }
    public paint(context: CanvasRenderingContext2D | null): void {
        let length=10
        if (context && this.p1 && this.p2){
            context.beginPath();
            context.moveTo(this.p1.x,this.p1.y);
            context.lineTo(this.p2.x,this.p2.y);

            // context.moveTo(this.p1.x+length,this.p1.y);
            // context.lineTo(this.p1.x+length,this.p2.y);
            // context.lineTo(this.p2.x-length,this.p2.y);
            // context.lineTo(this.p1.x-length,this.p1.y);
            // context.lineTo(this.p1.x+length,this.p1.y);
            
            context.lineWidth = 1;
            context.stroke();
            context.closePath()
            
        }
    }
    public setElementInformation(element:DrawElement): void {
        this.p1=element.points[0]
        this.p2=element.points[1]
        
    }

    public boundaryRect(): void {
        if (this.p1 != null && this.p2!=null){
            let path=new Path2D()
            path.rect(0,0,50,50)

        }

        
    }

    public shape(){
        if (this.p1 != null && this.p2!=null){
            let path=new Path2D()
            path.rect(0,0,50,50)
            console.log(path)

        }
    }

    click(x:number,y:number): void {
        if (this.p1 != null && this.p2!=null){
    
            // if (this.isPointInsideRectangle(x, y, this.p1.x, this.p1.y, this.p2.x, this.p2.y)) {
            //     console.log(`(${x}, ${y}) noktası dikdörtgenin içindedir.`);
            // } else {
            //     console.log(`(${x}, ${y}) noktası dikdörtgenin içinde değildir.`);
            // }

            
            // console.log(path)
    
            // const { m, b } = this.findLineParameters(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
            // console.log(`Çizginin eğimi (m): ${m}`);
            // console.log(`Çizginin y-kesiti (b): ${b}`);

            // const x0: number = 4;
            // const y0: number = 9;

            // if (this.isPointOnLine(x0, y0, m, b)) {
            //     console.log(`(${x0}, ${y0}) noktası çizgi üzerindedir.`);
            // } else {
            //     console.log(`(${x0}, ${y0}) noktası çizgi üzerinde değildir.`);
            // }
        }

    }

    isPointInsideRectangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): boolean {
        return x1 < x0 && x0 < x2 && y1 < y0 && y0 < y2;
    }
    
    
    

    findLineParameters(x1: number, y1: number, x2: number, y2: number): { m: number; b: number } {
        const m: number = (y2 - y1) / (x2 - x1);
        const b: number = y1 - m * x1;
    
        return { m, b };
    }
    
    isPointOnLine(x0: number, y0: number, m: number, b: number): boolean {
        // Y noktanın çizgi denklemine uygun olup olmadığını kontrol et
        const y_line = m * x0 + b;
    
        // Noktanın y değeri, çizgi denklemini sağlıyorsa true döndür
        return Math.abs(y0 - y_line) < 1e-6; // Eşitlik toleransı olarak küçük bir değer kullanabiliriz.
    }
    
    
    
    
    
    

}