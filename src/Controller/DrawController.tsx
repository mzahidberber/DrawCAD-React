import { DrawElement } from "../Model/DrawElement";
import { PointGeo } from "./Helper/PointGeo";
import { CommandController } from "./CommandController";
import { CommandType } from "./enum/CommandType";
import { DrawApiService } from "./Service/DrawApiService";

interface IDrawController{
}

export class DrawController implements IDrawController{
    private commandControllers:CommandController[]=[]
    private selectedCommandController:CommandController
    private _drawApiService:DrawApiService
    private _isStartCommand:boolean

    constructor() {
        const firstCommandController=new CommandController()
        this.commandControllers.push(firstCommandController)
        this.selectedCommandController=this.commandControllers[0]
        this._drawApiService=new DrawApiService()
        this._isStartCommand=false
    }

    async startCommandAsync(command:CommandType){
        await this._drawApiService.startCommandAsync(command,1,1,1)
        this._isStartCommand=true
    }

    async addPointAsync(point:PointGeo):Promise<DrawElement | null>{
        if(this._isStartCommand){
            let result=await this._drawApiService.addPointAsync(point.x,point.y)
            if(result && result.data){
                return new DrawElement(result.data)
            }
        }
        return null
    }
}