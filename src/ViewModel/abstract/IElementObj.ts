

export interface IElementObj{
    paint(context:CanvasRenderingContext2D | null):void
    boundaryRect():void
    click(x:number,y:number):void
}