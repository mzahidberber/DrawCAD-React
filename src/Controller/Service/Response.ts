

export class Response
{
    data:{} | null
    statusCode:number
    error:{} | null
    constructor(elementInfo:{});
    constructor(data:{} | null,statusCode:number,error:{} | null);
    
    constructor(...arr :any[]){
        if(typeof arr[0]==="object" && arr[0] !== null){
            this.data=arr[0]["data"]
            this.statusCode=arr[0]["statusCode"]
            this.error=arr[0]["error"]
        }else{
            this.data=arr[0]
            this.statusCode=arr[1]
            this.error=arr[2]
        }
    }
}