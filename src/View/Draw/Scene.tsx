import React, { Component } from 'react';
import { PointGeo } from '../../Controller/Helper/PointGeo';
import { DrawController } from '../../Controller/DrawController';
import { ElementContext } from '../../ViewModel/DrawElements/ElementContext';
import { IElementObj } from '../../ViewModel/DrawElements/abstract/IElementObj';
import { CommandType } from '../../Controller/enum/CommandType';


interface SceneProps {
    width: number
    height: number
    contoller:DrawController
    screenToscene:(p:PointGeo)=>PointGeo
    sceneToScreen:(p:PointGeo)=>PointGeo
  }

  interface IState{
    items:IElementObj[]
  }
  

export class Scene extends Component<SceneProps,IState> {
    private canvasRef: React.RefObject<HTMLCanvasElement>
    private canvas:HTMLCanvasElement | null
    private _scontext:CanvasRenderingContext2D | null
    private elementContext:ElementContext

    
    public get scontext() : CanvasRenderingContext2D | null {
      return this._scontext
    }
    
    
    constructor(props: SceneProps) {
      super(props)
      this.state = {
        items: [],
      }
      this.elementContext=new ElementContext()
      this.canvasRef = React.createRef()
      this.canvas = this.canvasRef.current
      this._scontext = this.canvas ? this.canvas.getContext('2d') : null
    
    }

    public startCommand(command:CommandType):void{
      this.props.contoller.startCommandAsync(command)
      this.elementContext.setElementType(command)
    }

    private trasformPath(path:Path2D,matrix:DOMMatrix):Path2D{
      let newPath=new Path2D()
      newPath.addPath(path,matrix)
      return newPath
    }
    private print(){
      this.state.items.forEach(element => {
        if (this._scontext) {
          var pathBo=new Path2D()
          element.boundaryRect(pathBo)
          let h = new DOMMatrix();
          h.e = this.props.height/2;
          h.f = this.props.width/2;
          h.scaleSelf(1,-1)
          var nnPath= this.trasformPath(pathBo,h)
          element.path=nnPath
          this._scontext.lineWidth = 1
          this._scontext.strokeStyle = "white";
          this._scontext.fillStyle="transparent"
          this._scontext.fill(nnPath)
          this._scontext.stroke(nnPath)


          var path=new Path2D()
          element.paint(path)
          let m = new DOMMatrix();
          m.e = this.props.height/2;
          m.f = this.props.width/2;
          m.scaleSelf(1,-1)
          var nPath= this.trasformPath(path,m)
          this._scontext.lineWidth = 2
          this._scontext.strokeStyle = "red";
          this._scontext.stroke(nPath)

          
        }
      })
        
    }

    public addElement(element:IElementObj){
        this.setState((prevState)=>{
          return {
            items: [...prevState.items, element],
          }
        })
        
    }
    componentDidMount() {
      this.canvas = this.canvasRef.current;
      this._scontext = this.canvas ? this.canvas.getContext('2d') : null
      this.clear()
      this.drawBackground(new PointGeo(0,0),new PointGeo(10000,10000))
    }
  
    componentDidUpdate() {
      // console.log("update")
      this.clear()
      this.drawBackground(new PointGeo(0,0),new PointGeo(10000,10000))
      this.print()
      
    }

    clear(){
      if (this._scontext) {
        this._scontext.clearRect(0,0,this.props.width,this.props.height)
      }
    }


    click(event: React.MouseEvent<HTMLCanvasElement>){
        const x = event.nativeEvent.offsetX
        const y = event.nativeEvent.offsetY
        this.props.contoller.addPointAsync(this.props.sceneToScreen(new PointGeo(x,y))).then((element)=>{
          if(element){
            this.elementContext.createElementInstance(element)
            var elemntObj=this.elementContext.elementObj
            if(elemntObj){
              this.addElement(elemntObj)
              this.elementContext.setNull()
            } 
          }
        })

        for (let i = 0; i < this.state.items.length; i++) {
          const item = this.state.items[i];
          if(this._scontext && item.path){
            if (this._scontext.isPointInPath(item.path,x, y)){
              console.log(item)
              
            }
          }
          
        }
    }

    move(event:React.MouseEvent<HTMLCanvasElement>){
      // const x = event.nativeEvent.offsetX;
      // const y = event.nativeEvent.offsetY;
      // console.log(x,y)
      
    }
  
    render() {
      return(
        <>
        <canvas 
        onClick={(event) => this.click(event)} 
        onMouseMove={(event)=>this.move(event)} 
        ref={this.canvasRef} 
        width={this.props.width} 
        height={this.props.height} />
        </>
    
      ) 
      
    }
  
    public drawBackground(p1:PointGeo,p2:PointGeo){

      if (this._scontext) {
        this._scontext.beginPath()
        this._scontext.fillStyle = "#000000"
        this._scontext.fillRect(0,0,this.props.width,this.props.height)
        this._scontext.stroke()
    }

        let logHL=Math.log10(window.innerWidth)
        // let logVL=Math.log10(window.innerHeight)
        // let z1=10**(Math.round(logHL)+1)
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
        this.addXYLine(this.props.width/2,0,this.props.width/2,this.props.height)
        this.addXYLine(0,this.props.height/2,this.props.width,this.props.width/2)

        
        
    }
    addXYLine(x1:number,y1:number,x2:number,y2:number){
          if (this._scontext) {
            this._scontext.beginPath()
            this._scontext.moveTo(x1,y1)
            this._scontext.lineTo(x2,y2)
            this._scontext.lineWidth=1
            this._scontext.strokeStyle = "green"
            this._scontext.stroke()
        }
        
    }

    addLine(x1:number,y1:number,x2:number,y2:number){
      if (this._scontext) {
        this._scontext.beginPath()
        this._scontext.moveTo(x1,y1)
        this._scontext.lineTo(x2,y2)
        this._scontext.lineWidth=0.3
        this._scontext.strokeStyle = "white"
        this._scontext.stroke()
    }
    }

    
}
