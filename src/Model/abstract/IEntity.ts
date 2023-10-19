import { StateType } from "../enums/StateType"

export interface IEntity{
    id: number
    state: StateType
    to_dict():{}
    to_dict_save():{}
}