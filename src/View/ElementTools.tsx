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
        <div style={ {width:'100%',position:'relative',marginTop:8} }>
            <div style={{position:'absolute',top:0,left:0,right:0}}>
                <div className='d-inline-flex justify-content-center border border-2'>
                    <DrawButton controller={this.props.controller} type={0} />
                    <DrawButton controller={this.props.controller} type={1} />
                    <DrawButton controller={this.props.controller} type={2} />
                </div>
            </div>
        </div>
    );
  }
}

export default ElementTools;