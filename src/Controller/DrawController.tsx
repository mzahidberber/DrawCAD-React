import { DrawElement } from "../Model/DrawElement";
import { PointGeo } from "./Helper/PointGeo";
import { CommandController } from "./CommandController";
import { CommandType } from "./enum/CommandType";
import { DrawApiService } from "./Service/DrawApiService";
import { Pen } from "../Model/Pen";
import { Layer } from "../Model/Layer";

interface IDrawController{
}

export class DrawController implements IDrawController{
    private commandControllers:CommandController[]=[]
    private selectedCommandController:CommandController
    private _drawApiService:DrawApiService
    private _isStartCommand:boolean
    public pens:Pen[]=[]
    public layers:Layer[]=[]

    constructor() {
        const firstCommandController=new CommandController()
        this.commandControllers.push(firstCommandController)
        this.selectedCommandController=this.commandControllers[0]
        this._drawApiService=new DrawApiService()
        this._isStartCommand=false
        this.getPensAsync().then((p)=>{
            this.pens=p !?? []
        })
        this.getLayersAsync(1).then((l)=>{
            this.layers=l !?? []
        })
    }

    //#region Layer
    async getLayersAsync(drawBoxId:number):Promise<Layer[] | null>{
        let result=await this._drawApiService.getLayersAsync(drawBoxId) 
        if(result){
            let layers=result.data as []
            return layers.map((x)=>new Layer(x))
        }
        return null
    }



    //#endregion

    //#region Pen

    async getPensAsync():Promise<Pen[] | null>{
        let result=await this._drawApiService.getPensAsync() 
        if(result){
            let pens=result.data as []
            return pens.map((x)=>new Pen(x))
        }
        return null
    }

    //#endregion

    //#region Draw

    async startCommandAsync(command:CommandType){
        await this._drawApiService.startCommandAsync(command,1,2,1)
        this._isStartCommand=true
    }

    async addPointAsync(point:PointGeo):Promise<DrawElement | null>{
        if(this._isStartCommand){
            let result=await this._drawApiService.addPointAsync(point.x,point.y)
            if(result && result.data){
                let element=new DrawElement(result.data)
                element.layer=this.layers.find((x)=>x.id==element.layerId) ?? null
                return element
            }
        }
        return null
    }

    async stopCommandAsync():Promise<boolean>{
        if(this._isStartCommand){
            let result=await this._drawApiService.stopCommandAsync()
            return result
        }
        return false
    }

    async isFinish():Promise<DrawElement | null>{
        if(this._isStartCommand){
            let result=await this._drawApiService.isFinishAsync()
            if(result) return new DrawElement(result)
        }
        return null
    }

    //#endregion
}