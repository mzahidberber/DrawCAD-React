
import { DrawElement } from "../../Model/DrawElement"
import { Layer } from "../../Model/Layer"
import { Pen } from "../../Model/Pen"
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
    //#region Layer

    async getLayersAsync(drawBoxId:number):Promise<Response | null>{
        let connectionString=new UrlBuilder().url(api).url("Layer").url("layerswithpen").params(`drawId=${drawBoxId}`).build()
        if(this._cookie.getToken()){
            const reponse= await this.postAsync(connectionString,null,this._cookie.getToken())
            return reponse
        }
        return null
    }

    async saveLayersAsync(drawBoxId:number,layers:Layer[]):Promise<Response | null>{
        let connectionString=new UrlBuilder().url(api).url("Layer").url("layers").url("add").build()
        if(this._cookie.getToken()){
            const reponse= await this.postAsync(connectionString,{"drawBoxId":drawBoxId,"layers":layers.map((x)=>x.to_dict())},this._cookie.getToken())
            return reponse
        }
        return null
    }


    async deleteLayersAsync(layers:Layer[]):Promise<Response | null>{
        let connectionString=new UrlBuilder().url(api).url("Layer").url("layers").url("delete").build()
        if(this._cookie.getToken()){
            const reponse= await this.deleteAsync(connectionString,layers.map((x)=>x.id),this._cookie.getToken())
            return reponse
        }
        return null
    }

    async updateLayersAsync(drawBoxId:number,layers:Layer[]):Promise<Response | null>{
        let connectionString=new UrlBuilder().url(api).url("Layer").url("layers").url("update").build()
        if(this._cookie.getToken()){
            const reponse= await this.putAsync(connectionString,{"drawBoxId":drawBoxId,"layers":layers.map((x)=>x.to_dict())},this._cookie.getToken())
            return reponse
        }
        return null
    }



    //#endregion
    
    //#region  Pen
    async getPensAsync():Promise<Response | null>{
        let connectionString=new UrlBuilder().url(api).url("Pen").url("penswithatt").build()
        if(this._cookie.getToken()){
            const reponse= await this.getAsync(connectionString,null,this._cookie.getToken())
            return reponse
        }
        return null
    }

    async savePensAsync(pens:Pen[]):Promise<Response | null>{
        let connectionString=new UrlBuilder().url(api).url("Pen").url("pens").url("add").build()
        if(this._cookie.getToken()){
            const reponse= await this.postAsync(connectionString,{"pens": pens.map((x)=>x.to_dict())},this._cookie.getToken())
            return reponse
        }
        return null
    }


    async deletePensAsync(pens:Pen[]):Promise<Response | null>{
        let connectionString=new UrlBuilder().url(api).url("Pen").url("pens").url("delete").build()
        if(this._cookie.getToken()){
            const reponse= await this.deleteAsync(connectionString,pens.map((x)=>x.id),this._cookie.getToken())
            return reponse
        }
        return null
    }

    async updatePensAsync(pens:Pen[]):Promise<Response | null>{
        let connectionString=new UrlBuilder().url(api).url("Pen").url("pens").url("update").build()
        if(this._cookie.getToken()){
            const reponse= await this.putAsync(connectionString,{"pens": pens.map((x)=>x.to_dict())},this._cookie.getToken())
            return reponse
        }
        return null
    }



    //#endregion
    
    //#region Draw
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
    async stopCommandAsync():Promise<boolean>{
        let connectionString=new UrlBuilder().url(api).url("draw").url("stopCommand").build()
        if(this._cookie.getToken()){
            const reponse= await this.putAsync(connectionString,null,this._cookie.getToken())
            return reponse.statusCode===200 ? true : false
        }
        return false
    }

    async isFinishAsync():Promise<DrawElement | null>{
        let connectionString=new UrlBuilder().url(api).url("draw").url("setIsFinish").build()
        if(this._cookie.getToken()){
            const reponse= await this.putAsync(connectionString,null,this._cookie.getToken())
            return reponse.statusCode===200 ? reponse.data ? new DrawElement(reponse.data):null : null
        }
        return null
    }

    async setRadius(radius:number):Promise<boolean>{
        let connectionString=new UrlBuilder().url(api).url("draw").url("setRadius").build()
        if(this._cookie.getToken()){
            const reponse= await this.putAsync(connectionString,radius,this._cookie.getToken())
            return reponse.statusCode===200 ? true : false
        }
        return false
    }

    //#endregion
    


}


