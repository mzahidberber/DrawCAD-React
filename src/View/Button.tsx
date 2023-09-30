import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import line from '../static/img/Line.png';
import pline from '../static/img/polyline.png';
import rectange from '../static/img/Rectangle.png';
import move from '../static/img/move.png';
import { DrawController } from '../Controller/DrawController';
import { CommandType } from '../Controller/enum/CommandType';

interface DrawButtonProp {
  type: number;
  controller:DrawController
}

class DrawButton extends Component<DrawButtonProp> {
  render() {
    const { type } = this.props;

    return (
      <div>
        <Button 
        variant="light" 
        onClick={()=>this.click(type)} 
        size="sm" 
        style={{marginLeft:2,marginRight:2,padding:0}}>
            <img src={this.selectImage(type)} alt="" width={25} height={25} />
            </Button>
      </div>
    );
  }
  selectImage(type:number):string{
    switch (type) {
        case 0:
            return line
        case 1:
            return pline
        case 2:
            return rectange
        default:
            return move
    }
  }
  click(type:number){
    
    switch (type) {
      case 0:
          return this.props.controller.startCommand(CommandType.line)
      case 1:
          return this.props.controller.startCommand(CommandType.circle)
      case 2:
          return this.props.controller.startCommand(CommandType.rectangle)
      default:
          return ''
    }
  }
}

export default DrawButton;


 // const token="eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMwOTk0ZTViLTQ2YzQtNGU3Ni04MDllLWY3MGRjN2NhNTBmYyIsImVtYWlsIjoidGVzdDNAdGVzdC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdDMzMzMzIiwianRpIjoiYzYxMDhmNzgtYjU4OC00N2Y0LThlYWMtMTRjNDk3ZDZmYWQ2IiwiYXVkIjpbInd3dy5hdXRoc2VydmVyLmNvbSIsInd3dy5kcmF3Z2VvLmNvbSIsInd3dy5kcmF3YXBpLmNvbSJdLCJuYmYiOjE2OTU5MzY0MTksImV4cCI6MTY5NjU0MTIxOSwiaXNzIjoid3d3LmF1dGhzZXJ2ZXIuY29tIn0.0L06JOphJj4hEbwxB8lt1KF_ImCgXGL_ny9DXwAl8Ho"
    // fetch("http://localhost:5000/Draw/startCommand",{
    //   method:'POST',
    //   headers: new Headers({
    //     'Authorization': `Bearer ${token}`, 
    //     'Content-Type': 'application/json'
    // }), 
    //   body:JSON.stringify({
    //     "command": 4
    //    })
    // }).then(()=>{
    //   console.log('new blok')
    // })
    // .then(data => {
    //   console.log(data)
    // }).catch(error=>{
    //   console.log(error)
    // })