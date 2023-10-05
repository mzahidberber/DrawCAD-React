import { DrawElement } from "../Model/DrawElement";
import { Point } from "../Model/Point";
import { PointGeo } from "./Helper/PointGeo";
import { CommandController } from "./CommandController";
import { CommandType } from "./enum/CommandType";
import { Radius } from "../Model/Radius";
import { Cookie } from "./Service/Cookie";

interface IDrawController{
}

export class DrawController implements IDrawController{
    private commandControllers:CommandController[]=[]
    private selectedCommandController:CommandController
    private _cookie:Cookie
    private clickList:PointGeo[]=[]

    constructor() {
        const firstCommandController=new CommandController()
        this.commandControllers.push(firstCommandController)
        this.selectedCommandController=this.commandControllers[0]
        this._cookie=new Cookie()
    }

    startCommand(command:CommandType){
        console.log(Object.values(CommandType)[command])
    }

    addPoint(point:PointGeo):DrawElement | null{
        this.clickList.push(point)
        if(this.clickList.length==2){
            const points:Point[]=[]
            points.push(new Point(0,this.clickList[0].x,this.clickList[0].y,0,0))
            points.push(new Point(0,this.clickList[1].x,this.clickList[1].y,0,0))
            const radiuses:Radius[]=[]
            radiuses.push(new Radius(0,100,0))
            this.clickList.length=0
            return new DrawElement(0,0,1,0,points,radiuses,[])
        }
        return null
    }
}