

export class Response
{
    data:{} | null
    statusCode:number
    errors:{} | null
    constructor(elementInfo:{});
    constructor(data:{} | null,statusCode:number,errors:{} | null);
    
    constructor(...arr :any[]){
        if(typeof arr[0]==="object" && arr[0] !== null){
            this.data=arr[0]["data"]
            this.statusCode=arr[0]["data"]
            this.errors=arr[0]["data"]
        }else{
            this.data=arr[0]
            this.statusCode=arr[1]
            this.errors=arr[2]
        }
    }
}