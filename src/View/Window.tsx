import { Component, ReactNode } from "react";
import ElementTools from "./ElementTools";
import { Scene } from "./Scene";
import { DrawController } from "../Controller/DrawController";
import { EditTools } from "./EditTools";
import { GraphicsView } from "./GraphicsView";



export class Window extends Component{
    private drawController:DrawController

    constructor(props:any){
        super(props)
        this.drawController=new DrawController()
    }

    componentDidMount() {
        // console.log("window")
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        
    }

    render() {
        return (
            <>
            <GraphicsView controller={this.drawController}/>
            <ElementTools controller={this.drawController} />
            <EditTools controller={this.drawController} />
            </>
        )
    }
}