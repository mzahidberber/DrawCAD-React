import { Point } from "../Model/Point";
import { DrawElement } from "../Model/DrawElement";
import { BaseElement } from "./BaseElement";
import { GeoMath } from "../Controller/Helper/GeoMath"
import { PointGeo } from "../Controller/Helper/PointGeo";
export class Line extends BaseElement {
    private p1:Point | null =null
    private p2:Point | null =null
    
    
    constructor (){
        super()
    }
    
    

    public paint(context: CanvasRenderingContext2D | null): void {
        if (context && this.p1 && this.p2){
            context.beginPath()
            context.moveTo(this.p1.x,this.p1.y)
            context.lineTo(this.p2.x,this.p2.y)
            context.lineWidth = 2
            context.strokeStyle = "red";
            context.stroke()
            this.boundaryRect(context)
        }
    }
    public setElementInformation(element:DrawElement): void {
        this.p1=element.points[0]
        this.p2=element.points[1]
        
    }

    public boundaryRect(context: CanvasRenderingContext2D | null): Path2D | null {
        if (context && this.p1 && this.p2){
            let aci=GeoMath.calculateAngle(this.p1.x, this.p1.y,this.p2.x, this.p2.y)
            this.path = new Path2D();
            this.path.moveTo(this.p1.x, this.p1.y)
            let a=GeoMath.findPointOnCircle(new PointGeo(this.p1.x, this.p1.y),20,aci+90)
            this.path.lineTo(a.x,a.y)
            let b=GeoMath.findPointOnCircle(new PointGeo(this.p2.x, this.p2.y),20,aci+90)
            this.path.lineTo(b.x,b.y)
            let c=GeoMath.findPointOnCircle(new PointGeo(this.p2.x, this.p2.y),20,aci+270)
            this.path.lineTo(c.x,c.y)
            let d=GeoMath.findPointOnCircle(new PointGeo(this.p1.x, this.p1.y),20,aci+270)
            this.path.lineTo(d.x,d.y)
            this.path.lineTo(this.p1.x, this.p1.y)
            context.strokeStyle="blue"
            context.stroke(this.path)
            context.strokeStyle="black"
            return this.path

        }
        return null
        
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
    
    private defineLineAsRect(x1:number,y1:number,x2:number,y2:number,lineWidth:number):LineRec{
        var dx = x2 - x1
        var dy = y2 - y1
        var lineLength = Math.sqrt(dx * dx + dy * dy)
        var lineRadianAngle = Math.atan2(dy, dx)
        return ({
            translateX: x1,
            translateY: y1,
            rotation: lineRadianAngle,
            rectX: 0,
            rectY: -lineWidth / 2,
            rectWidth: lineLength,
            rectHeight: lineWidth
        })
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


interface LineRec
    {
        translateX: number,
        translateY: number,
        rotation: number,
        rectX: number,
        rectY: number,
        rectWidth: number,
        rectHeight: number
    }
