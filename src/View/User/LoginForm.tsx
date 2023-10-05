import React, { Component, FormEvent } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { UserController } from "../../Controller/UserController";

interface IProps{
  userController:UserController
}
interface IState{
    show:boolean
    formData: {
        email:string
        password:string
    }
    
}

export class LoginForm extends Component<IProps,IState>{
    private nameLabelRef:React.RefObject<HTMLButtonElement>
    private loginRef:React.RefObject<HTMLButtonElement>
    private logoutRef:React.RefObject<HTMLButtonElement>
    private registerRef:React.RefObject<HTMLButtonElement>
    private alertRef:React.RefObject<HTMLDivElement>
    constructor(props:IProps){
        super(props)
        this.state={
            show:false,
            formData: {
                email: '',
                password: '',
              },
        }
        this.nameLabelRef=React.createRef()
        this.loginRef=React.createRef()
        this.logoutRef=React.createRef()
        this.registerRef=React.createRef()
        this.alertRef=React.createRef()

        
    }
    componentDidMount(): void {
      this.props.userController.checkLogin() ? this.isLoginShowView() : this.isLogoutShowView()
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

    isLoginShowView(){
      if(this.loginRef.current){
        this.loginRef.current.style.display="none"
      }
      if(this.registerRef.current){
        this.registerRef.current.style.display="none"
      }
      if(this.logoutRef.current){
        this.logoutRef.current.style.display="inline"
      }
      if(this.nameLabelRef.current){
        this.nameLabelRef.current.textContent=this.props.userController.getEmail()
        this.nameLabelRef.current.style.display="inline"
     }
     if(this.alertRef.current){
      this.alertRef.current.style.display="none"
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

    isLogoutShowView(){
      if(this.loginRef.current){
        this.loginRef.current.style.display="inline"
      }
      if(this.registerRef.current){
        this.registerRef.current.style.display="inline"
      }
      if(this.logoutRef.current){
        this.logoutRef.current.style.display="none"
      }
      if(this.nameLabelRef.current){
        this.nameLabelRef.current.textContent=""
        this.nameLabelRef.current.style.display="none"
     }
    }

    handleClose = () => this.setState({show:false})
    handleShow =  () => this.setState({show:true})
    register=()=>{
      
    }
    logout =()=>{
      this.props.userController.logout()
      this.isLogoutShowView()
    }
    login = (e:FormEvent)=>{
         e.preventDefault()
         this.props.userController.login(this.state.formData.email,this.state.formData.password).then((data)=>{
            if(data===true){
                this.isLoginShowView()
            }else{
              if(this.alertRef.current){
                this.alertRef.current.style.display="block"
              }
            }
            
         })
         
         
         
    }

    render(){
        return (
            <>
                <div style={{position:'absolute',top:10,left:10,zIndex:1}}>
                    <div>
                    <Button 
                        variant="light" 
                        size="sm"
                        disabled >DrawCAD
                    </Button>
                    <Button 
                        onClick={this.handleShow}
                        variant="outline-secondary" 
                        size="sm" 
                        ref={this.loginRef}
                        style={{marginLeft:3,display:"inline"}}>Login
                    </Button>
                    <Button 
                        onClick={this.logout}
                        variant="outline-secondary" 
                        size="sm" 
                        ref={this.logoutRef}
                        style={{marginLeft:3,display:"none"}}>Logout
                    </Button>
                    <Button 
                        onClick={this.register}
                        variant="outline-secondary" 
                        size="sm" 
                        ref={this.registerRef}
                        style={{marginLeft:3,display:"inline"}}>Register
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
                        <Alert ref={this.alertRef} style={{display:'none'}} key={'danger'} variant={'danger'}>
                          Email or password incorrect!
                        </Alert>
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