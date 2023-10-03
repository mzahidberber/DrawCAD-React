import { Component } from 'react';
import DrawButton from './Button'
import { Window } from './Window';

interface IElementTools{
    window:Window
}

class ElementTools extends Component<IElementTools> {
  render() {
    return (
            <div style={{position:'absolute',top:8,left:0,right:0}}>
                <div className='d-inline-flex justify-content-center border border-2'>
                    <DrawButton window={this.props.window} type={0} />
                    <DrawButton window={this.props.window} type={1} />
                    <DrawButton window={this.props.window} type={2} />
                </div>
            </div>
    );
  }
}

export default ElementTools;