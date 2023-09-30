import { DrawElement } from "../Model/DrawElement";
import { Point } from "../Model/Point";
import { Scene } from "../View/Scene";
import { Line } from "../ViewModel/Line";
import { PointGeo } from "../ViewModel/PointGeo";
import { IElementObj } from "../ViewModel/abstract/IElementObj";
import { CommandController } from "./CommandController";
import { CommandType } from "./enum/CommandType";

interface IDrawController{
}

export class DrawController implements IDrawController{
    private commandControllers:CommandController[]=[]
    private selectedCommandController:CommandController | null =null
    private clickList:PointGeo[]=[]
    constructor() {
        
    }

    startCommand(command:CommandType){
        console.log("controller")
        console.log(command)
    }

    addPoint(point:PointGeo):IElementObj | null{
        this.clickList.push(point)
        if(this.clickList.length==2){
            const line= new Line()
            const points:Point[]=[]
            points.push(new Point(0,this.clickList[0].x,this.clickList[0].y,0,0))
            points.push(new Point(0,this.clickList[1].x,this.clickList[1].y,0,0))
            line.setElementInformation(new DrawElement(0,0,1,0,points,[],[]))
            this.clickList.length=0
            return line
        }
        return null
    }
}