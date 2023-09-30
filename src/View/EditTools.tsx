import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrawButton from './Button'
import { DrawController } from '../Controller/DrawController';

interface IEditTools{
    controller:DrawController
}

export class EditTools extends Component<IEditTools> {
  render() {
    return (
        <div style={ {width:'100%',position:'relative',marginTop:8} }>
            <div style={{position:'absolute',top:40,left:0,right:0}}>
                <div className='d-inline-flex justify-content-center border border-2'>
                    <DrawButton controller={this.props.controller} type={3} />
                    <DrawButton controller={this.props.controller} type={4} />
                    <DrawButton controller={this.props.controller} type={5} />
                </div>
            </div>
        </div>
    );
  }
}
