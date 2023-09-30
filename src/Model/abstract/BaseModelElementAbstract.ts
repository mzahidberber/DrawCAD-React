import { IEntity } from "./IEntity.js";

export abstract class BaseModelElementAbstract implements IEntity{
    abstract to_dict():{}
    abstract to_dict_save():{}

}