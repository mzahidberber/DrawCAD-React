import React,{ Component, RefObject } from "react";
import { Scene } from "./Scene";
import { DrawController } from "../../Controller/DrawController";
import { PointGeo } from "../../Controller/Helper/PointGeo";
import { CommandType } from "../../Controller/enum/CommandType";

interface IGraphicsView{
    controller:DrawController
}

interface IState{
    origin:PointGeo
    zoom:number
    cameraPosition:PointGeo
}

export class GraphicsView extends Component<IGraphicsView,IState>{
    private panLock:boolean=false
    private pan1:PointGeo=new PointGeo(0,0)
    private pan2:PointGeo=new PointGeo(0,0)
    private coordinateLabelRef:RefObject<HTMLHeadingElement>
    private sceneRef:RefObject<Scene>


    constructor(props:IGraphicsView){
       super(props)
       this.state={
           origin:new PointGeo(500,500),
           zoom:1.00,
           cameraPosition:new PointGeo(0,0)
       }
       this.coordinateLabelRef=React.createRef()
       this.sceneRef=React.createRef()
       
    }

    startCommand(command:CommandType){
        this.sceneRef.current?.startCommand(command)
    }
    
    sceneToScreen(point:PointGeo):PointGeo{
        let x= (point.x-this.state.origin.x)*this.state.zoom+this.state.cameraPosition.x
        let y=(point.y-this.state.origin.y)*this.state.zoom+this.state.cameraPosition.y
        return new PointGeo(x,-y)
    }

    screenToscene(point:PointGeo):PointGeo{
        let x= ((point.x-this.state.cameraPosition.x)/this.state.zoom)+this.state.origin.x
        let y=((-point.y-this.state.cameraPosition.y)/this.state.zoom)+this.state.origin.y
        return new PointGeo(x,y)
    }
    componentDidMount(): void {
        window.scrollTo(500,500)
        this.setState(()=>{
            return {
              origin: new PointGeo(500,500),
              zoom:1.00,
                cameraPosition:new PointGeo(0,0)
            }
          })
    }
    move(event:React.MouseEvent<HTMLElement>){
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        let p=this.sceneToScreen(new PointGeo(x,y))
        if(this.coordinateLabelRef.current){
            this.coordinateLabelRef.current.textContent=`${(Math.round(p.x * 100)/100).toFixed(4)} - ${(Math.round(p.y* 100)/100).toFixed(4)}`

        }
        
      }

      click(event: React.MouseEvent<HTMLElement>){
        const x = event.nativeEvent.offsetX
        const y = event.nativeEvent.offsetY
        // if(this.sceneRef.current) this.sceneRef.current?.click1(this.sceneToScreen(new PointGeo(x,y)))
        
    }
    render(){
        return (
            <>
            <div 
            style={{overflow:'scroll',height:'100vh'}} 
            onClick={(event) => this.click(event)}
            onMouseMove={(event)=>this.move(event)}>
                <div style={{position:'absolute',left:20,bottom:0}}>
                    <h5 ref={this.coordinateLabelRef}>0000:000 - 0000:0000</h5>
                </div>
                <Scene 
                sceneToScreen={this.sceneToScreen.bind(this)}
                screenToscene={this.screenToscene.bind(this)}
                ref={this.sceneRef} 
                contoller={this.props.controller} 
                width={1000} 
                height={1000} />
                
            </div>
                
            </>
            
        )
    }
}