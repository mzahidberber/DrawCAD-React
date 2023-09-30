import { Component } from "react";
import { Scene } from "./Scene";
import { DrawController } from "../Controller/DrawController";

interface IGraphicsView{
    controller:DrawController
}

export class GraphicsView extends Component<IGraphicsView>{
    render(){
        return (
            <>
                <Scene contoller={this.props.controller} width={1000} height={1000} />
            </>
            
        )
    }
}