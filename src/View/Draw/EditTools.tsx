import { Component } from 'react';
import DrawButton from './Button'
import { Window } from './Window';

interface IEditTools{
    window:Window
}

export class EditTools extends Component<IEditTools> {
  render() {
    return (
            <div style={{position:'absolute',top:48,left:0,right:0}}>
                <div className='d-inline-flex justify-content-center border border-2'>
                    <DrawButton window={this.props.window} type={3} />
                    <DrawButton window={this.props.window} type={4} />
                    <DrawButton window={this.props.window} type={5} />
                    <DrawButton window={this.props.window} type={6} />
                </div>
            </div>
    );
  }
}
