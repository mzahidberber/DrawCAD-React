

export class Color{
    red:number=255
    blue:number=255
    green:number=255

    constructor();
    constructor(red:number,green:number,blue:number);
    constructor(...arr:number[]){
        this.red=arr[0]
        this.green=arr[1]
        this.blue=arr[2]
    }
}