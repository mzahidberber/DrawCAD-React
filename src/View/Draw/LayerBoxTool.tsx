import { Component, MouseEventHandler, RefObject } from 'react';
import { Button, Form, InputGroup, Offcanvas, Table, Toast, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Layer } from '../../Model/Layer';
import { Window } from './Window';
import styles from './Style/LayerBoxTool.module.css'
import addimg from '../../static/img/addBtn.png';
import deleteimg from '../../static/img/deleteBtn.png';
import openLockimg from '../../static/img/OpenLock.png';
import closeLockimg from '../../static/img/CloseLock.png';
import openVisImg from '../../static/img/OpenAppearance.png';
import closeVisImg from '../../static/img/CloseAppearance.png';
import React from 'react';
import { SketchPicker } from 'react-color';

interface ILayerBoxTool{
    window:Window
}

interface IState{
  show:boolean
  layers:Layer[]
  colorState:string
  colorToast:boolean
}

class LayerBoxTool extends Component<ILayerBoxTool,IState> {
  constructor(props:ILayerBoxTool){
    super(props)
    this.state={
      show:true,
      layers:this.props.window.getLayers(),
      colorState:'#fff',
      colorToast:false
    }
  }
  componentDidUpdate(prevProps: Readonly<ILayerBoxTool>, prevState: Readonly<IState>, snapshot?: any): void {
      console.log("updateLayerBox")
  }
  handleClose = () => this.setState({show:false})
  handleShow =  () => this.setState({show:true})
  toggleShowB  =  () => this.setState({colorToast:true})
  setChecked =  (check:boolean,layer:Layer) => layer.lock=check
  clickLockButton=(e:Layer)=>{
    let lockInfo=e.lock
    this.setState(prevState=>{
      const updatedLayers = [...prevState.layers]
      const layerIndex = updatedLayers.findIndex((x) => x.id === e.id)
      if (layerIndex !== -1) updatedLayers[layerIndex].lock = !lockInfo
      return { layers: updatedLayers }
    })
  }
  clickVisibilityButton=(e:Layer)=>{
    let visibilityInfo=e.visibility
    this.setState(prevState=>{
      const updatedLayers = [...prevState.layers]
      const layerIndex = updatedLayers.findIndex((x) => x.id === e.id)
      if (layerIndex !== -1) updatedLayers[layerIndex].visibility = !visibilityInfo
      return { layers: updatedLayers }
    })
  }
  colorChange=(color:any)=>{
    this.setState({colorState:color.hex})
    // this.setState(prevState=>{
    //   const updatedLayers = [...prevState.layers]
    //   const layerIndex = updatedLayers.findIndex((x) => x.id === e.id)
    //   if (layerIndex !== -1) {
    //     updatedLayers[layerIndex].pen.red = color.rgb.r
    //     updatedLayers[layerIndex].pen.blue = color.rgb.b
    //     updatedLayers[layerIndex].pen.green = color.rgb.g
    //   }
    //   return { layers: updatedLayers }
    // })
  }
  render() {
    return (
          <>
            <Offcanvas className={styles.customoffcanvas}  show={this.state.show} onHide={this.handleClose} placement='start' >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Layers</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Button>add</Button>
                <Button>add</Button>
                <Button>add</Button>
              <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Lock</th>
          <th>Visibility</th>
          <th>Thickness</th>
          <th>Color</th>
          <th>Type</th>
          <th>Elements</th>
        </tr>
      </thead>
      <tbody>
        
        {this.state.layers.map((x) => (
          <tr>
            <td key={`${x.id} id`}>{x.id}</td>
            <td key={`${x.id} name`}>{x.name}</td>
            <td key={`${x.id} lock`}>
              <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2 ">
                <ToggleButton className={styles.lockBtn}   id={x.id.toString()} value={1}>
                   <img onClick={()=>this.clickLockButton(x)} src={x.lock?closeLockimg:openLockimg}/>
                </ToggleButton>
              </ToggleButtonGroup>
            </td>
            <td key={`${x.id} vis`}>
            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2 ">
                <ToggleButton className={styles.lockBtn}   id={x.id.toString()} value={1}>
                   <img onClick={()=>this.clickVisibilityButton(x)} src={x.visibility?closeVisImg:openVisImg}/>
                </ToggleButton>
              </ToggleButtonGroup>  
            </td>
            <td key={`${x.id} thic`}>
              thic
              {/* <InputGroup className="mb-3">
              <Form.Control
              style={{width:'15px'}}
              type='number'
              // value={x.thickness}
              // step={1}
              // max={5}
              // min={0}
              />
            </InputGroup> */}
            </td>
            <td key={`${x.id} color`}>color</td>
            <td key={`${x.id} type`}>type</td>
            <td key={`${x.id} leng`}>{x.elements.length}</td>
            {/* <SketchPicker color={ this.state.colorState } onChange={this.colorChange} /> */}
        </tr>
        ))}
        
      </tbody>
    </Table>
    
              </Offcanvas.Body>
            </Offcanvas>
          </>
    )
  }
}

export default LayerBoxTool;