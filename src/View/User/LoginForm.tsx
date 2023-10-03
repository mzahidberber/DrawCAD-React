import React, { Component, FormEvent } from "react";
import { Button, Modal } from "react-bootstrap";

interface IState{
    show:boolean
    formData: {
        email:string
        password:string
    }
}

export class LoginForm extends Component<{},IState>{
    private nameLabelRef:React.RefObject<HTMLButtonElement>
    constructor(props:IState){
        super(props)
        this.state={
            show:false,
            formData: {
                email: '',
                password: '',
              },
        }
        this.nameLabelRef=React.createRef()
    }
    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
          formData: {
            ...prevState.formData,
            [name]: value,
          },
        }));
      }

    handleClose = () => this.setState({show:false})
    handleShow =  () => this.setState({show:true})
    login = (e:FormEvent)=>{
         e.preventDefault()
         console.log("login")
         console.log(this.state)
         ///Login işlemi eklenecek Butonlar degişcek logout olcak
         if(this.nameLabelRef.current){
            this.nameLabelRef.current.textContent=this.state.formData.email
            this.nameLabelRef.current.style.display="inline"
         }
         this.handleClose()
         this.setState(()=>{
            return {
                formData: {
                    email: '',
                    password: '',
                }
            }
          })
         
         
    }

    render(){
        return (
            <>
                <div style={{position:'absolute',top:10,left:10,zIndex:9999999}}>
                    <div>
                    <Button 
                        onClick={this.handleShow}
                        variant="outline-secondary" 
                        size="sm" >Login
                    </Button>
                    <Button 
                        variant="outline-secondary" 
                        size="sm" 
                        style={{marginLeft:3}}>Register
                    </Button>
                    <Button 
                        ref={this.nameLabelRef}
                        variant="light" 
                        disabled
                        size="sm" 
                        style={{marginLeft:3,display:"none"}}>email
                    </Button>
                </div>
                
                <Modal
                  show={this.state.show}
                  onHide={this.handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                <form onSubmit={this.login}>
                  <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <div className="form-group">
                            <input 
                            onInput={this.handleInputChange} 
                            value={this.state.formData.email} 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            style={{width:'100%'}}></input>
                            <input 
                            onInput={this.handleInputChange}
                             value={this.state.formData.password} 
                             className="form-control mt-2" 
                             type="password" 
                             name="password" placeholder="Password" 
                             style={{width:'100%'}}></input>
                        </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button type="submit" variant="primary">Login</Button>
                  </Modal.Footer>
                  </form>
                </Modal>
                
            </div>
            </>
        )
    }
}