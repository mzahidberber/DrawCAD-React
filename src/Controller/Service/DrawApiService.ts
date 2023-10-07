
import { CommandType } from "../enum/CommandType"
import { BaseService } from "./BaseService"
import { Cookie } from "./Cookie"
import { Response } from "./Response"
import { UrlBuilder } from "./UrlBuilder"
import { api } from "./Urls"


export class DrawApiService extends BaseService{
    private _cookie:Cookie
    constructor(){
        super()
        this._cookie=new Cookie()
    }

    async startCommandAsync(command: CommandType,drawBoxId:number,layerId:number,penId:number):Promise<boolean>{
        let connectionString=new UrlBuilder().url(api).url("Draw").url("startCommand").build()
        if(this._cookie.getToken()){
            const reponse= await this.postAsync(connectionString,{
                "command": command,
                "drawId": drawBoxId,
                "layerId": layerId,
                "penId": penId,
            },this._cookie.getToken())
            return reponse.statusCode===200 ? true:false
        }
        //hata dönmesi lazım giriş yapılmamış
        return false
        
    }

    async addPointAsync(x:number, y:number):Promise<Response | null>{
        let connectionString=new UrlBuilder().url(api).url("draw").url("addcoordinate").build()
        if(this._cookie.getToken()){
            const reponse= await this.postAsync(connectionString,{"x": x, "y": y, "z": 1},this._cookie.getToken())
            return reponse
        }
        return null
    }



}


