import { Component } from "react";
import { Scene } from "./Scene";
import { DrawController } from "../Controller/DrawController";

interface IGraphicsView{
    controller:DrawController
}

export class GraphicsView extends Component<IGraphicsView>{
    componentDidMount(): void {
        window.scrollTo(500,500)
    }
    render(){
        return (
            <>
            <div style={{overflow:'scroll',height:'100vh'}}>
            <Scene contoller={this.props.controller} width={10000} height={10000} />
            </div>
                
            </>
            
        )
    }
}