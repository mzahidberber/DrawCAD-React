


export interface IElementObj{
    path:Path2D | null
    paint(path:Path2D):void
    boundaryRect(path:Path2D):void
    click(x:number,y:number):void
}