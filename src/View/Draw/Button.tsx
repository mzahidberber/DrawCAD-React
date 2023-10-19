import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import line from '../../static/img/Line.png';
import rectange from '../../static/img/Rectangle.png';
import circle from '../../static/img/Circle.png';
import move from '../../static/img/move.png';
import layer from '../../static/img/Layer.png';
import { CommandType } from '../../Controller/enum/CommandType';
import { Window } from './Window';

interface DrawButtonProp {
  type: number;
  window:Window
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
            return circle
        case 2:
            return rectange
        case 6:
            return layer
        default:
            return move
    }
  }
  click(type:number){
    
    switch (type) {
      case 0:
          return this.props.window.startCommand(CommandType.line)
      case 1:
          return this.props.window.startCommand(CommandType.circle)
      case 2:
          return this.props.window.startCommand(CommandType.rectangle)
      case 6:
          return this.props.window.showLayerBox()
      default:
          return ''
    }
  }
}

export default DrawButton;


