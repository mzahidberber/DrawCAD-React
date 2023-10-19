import { StateType } from "../enums/StateType";
import { IEntity } from "./IEntity";

export abstract class BaseModelElementAbstract implements IEntity{
    protected _state: StateType=StateType.unchanged
    protected _id: number=0

    
    public get state() : StateType {
        return this._state
    }
    public set state(s: StateType) {
        this._state = s;
    }
    
    public get id() : number {
        return this._id
    }
    
    abstract to_dict():{}
    abstract to_dict_save():{}

}