import React, { Component,useEffect } from 'react';
import { PointGeo } from '../ViewModel/PointGeo';
import { IElementObj } from '../ViewModel/abstract/IElementObj';
import { Line } from '../ViewModel/Line';
import { DrawElement } from '../Model/DrawElement';
import { Point } from '../Model/Point';
import { DrawController } from '../Controller/DrawController';

interface SceneProps {
    width: number;
    height: number;
    contoller:DrawController
  }
  

export class Scene extends Component<SceneProps> {
    private canvasRef: React.RefObject<HTMLCanvasElement>;
    private canvas:HTMLCanvasElement | null;
    private scontext:CanvasRenderingContext2D | null;
    private items:IElementObj[]=[]
    
    constructor(props: SceneProps) {
      super(props);
      this.state = {
        items: [],
      };
      this.canvasRef = React.createRef();
      this.canvas = this.canvasRef.current;
      this.scontext = this.canvas ? this.canvas.getContext('2d') : null;
    }


    public print(){
        if (this.scontext) {
            this.items.forEach(element => {
                element.paint(this.scontext)
            });
        }
    }

    public addElement(element:IElementObj){
        this.items.push(element)
        this.forceUpdate()
        // this.setState((prevState)=>{
        //   return {
        //     items: [...prevState.items, element],
        //   }
        // })
        
    }
    componentDidMount() {
      this.canvas = this.canvasRef.current;
      this.scontext = this.canvas ? this.canvas.getContext('2d') : null;
      this.clear()
      this.drawBackground(new PointGeo(0,0),new PointGeo(1000,1000));
    }
  
    componentDidUpdate() {
      this.clear()
      this.drawBackground(new PointGeo(0,0),new PointGeo(1000,1000));
      this.print()
    }

    clear(){
      if (this.scontext) {
        this.scontext.clearRect(0,0,this.props.width,this.props.height)
      }
    }

    click(event: React.MouseEvent<HTMLCanvasElement>){
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        const result= this.props.contoller.addPoint(new PointGeo(x,y))
        if(result){
          this.addElement(result)
        }
    }

    move(event:React.MouseEvent<HTMLCanvasElement>){
        // console.log(event)
    }
  
    render() {
      return <canvas 
      onClick={(event) => this.click(event)} 
      onMouseMove={(event)=>this.move(event)} 
      ref={this.canvasRef} 
      width={this.props.width} 
      height={this.props.height} />;
    }
  
    public drawBackground(p1:PointGeo,p2:PointGeo){
        let logHL=Math.log10(window.innerWidth)
        let logVL=Math.log10(window.innerHeight)
        let z1=10**(Math.round(logHL)+1)
        let z2=10**Math.round(logHL)
        let z3=10**(Math.round(logHL)-1)

        for (let i =Math.ceil(p1.x / z2) * z2; i <=  Math.ceil(p2.x / z2) * z2; i+=z2) {
            this.addLine(Number(i),p1.y,Number(i),p2.y)
        }

        for (let i =Math.ceil(p1.x / z3) * z3; i <=  Math.ceil(p2.x / z3) * z2; i+=z3) {
            this.addLine(Number(i),p1.y,Number(i),p2.y)
        }

        
        for (let i = Math.ceil(p1.y / z2) * z2; i <=  Math.ceil(p2.y / z2) * z2; i+=z2) {
            this.addLine(p1.x,Number(i),p2.x,Number(i))
        }

        for (let i = Math.ceil(p1.y / z3) * z3; i <= Math.ceil(p2.y / z3) * z3; i+=z3) {
            this.addLine(p1.x,Number(i),p2.x,Number(i))
        }
        this.addXYLine(5000,0,5000,10000)
        this.addXYLine(0,5000,10000,5000)
    }
    addXYLine(x1:number,y1:number,x2:number,y2:number){
          if (this.scontext) {
            this.scontext.beginPath()
            this.scontext.moveTo(x1,y1)
            this.scontext.lineTo(x2,y2)
            this.scontext.lineWidth=1
            this.scontext.stroke()
        }
        
    }

    addLine(x1:number,y1:number,x2:number,y2:number){
      if (this.scontext) {
        this.scontext.beginPath()
        this.scontext.moveTo(x1,y1)
        this.scontext.lineTo(x2,y2)
        this.scontext.lineWidth=0.3
        this.scontext.stroke()
    }
    }
}
