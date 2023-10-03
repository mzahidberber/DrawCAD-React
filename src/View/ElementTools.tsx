import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrawButton from './Button'
import { DrawController } from '../Controller/DrawController';

interface IElementTools{
    controller:DrawController
}

class ElementTools extends Component<IElementTools> {
  render() {
    return (
            <div style={{position:'absolute',top:8,left:0,right:0}}>
                <div className='d-inline-flex justify-content-center border border-2'>
                    <DrawButton controller={this.props.controller} type={0} />
                    <DrawButton controller={this.props.controller} type={1} />
                    <DrawButton controller={this.props.controller} type={2} />
                </div>
            </div>
    );
  }
}

export default ElementTools;