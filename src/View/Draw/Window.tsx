import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, RefObject } from "react";
import ElementTools from "./ElementTools";
import { DrawController } from "../../Controller/DrawController";
import { EditTools } from "./EditTools";
import { GraphicsView } from "./GraphicsView";
import React from "react";
import { CommandType } from "../../Controller/enum/CommandType";
import { LoginForm } from "../User/LoginForm";
import { UserController } from '../../Controller/UserController';



export class Window extends Component{
    private drawController:DrawController
    private userController:UserController
    private viewRef:RefObject<GraphicsView>
    constructor(props:any){
        super(props)
        this.drawController=new DrawController()
        this.userController=new UserController()
        this.viewRef=React.createRef()
    }

    componentDidMount() {
        // console.log("window")
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        
    }

    startCommand(command:CommandType){
        this.viewRef.current?.startCommand(command)
    }

    render() {
        return (
            <>
            <LoginForm userController={this.userController}/>
            <GraphicsView ref={this.viewRef} controller={this.drawController}/>
            <ElementTools window={this} />
            <EditTools window={this} />
            </>
        )
    }
}