

export interface IElementObj{
    path:Path2D | null
    paint(context:CanvasRenderingContext2D | null):void
    boundaryRect(context:CanvasRenderingContext2D | null):Path2D | null 
    click(x:number,y:number):void
}