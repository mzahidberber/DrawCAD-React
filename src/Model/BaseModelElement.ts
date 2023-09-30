import { BaseModelElementAbstract } from "./abstract/BaseModelElementAbstract";
import { StateType } from "./enums/StateType";


export class BaseModelElement extends BaseModelElementAbstract{
    public state: StateType=StateType.unchanged;
    protected _id: number=0;

    get id():number{
        return this._id
    }

    to_dict(): {} {
        throw new Error("Method not implemented.");
    }
    to_dict_save(): {} {
        throw new Error("Method not implemented.");
    }

}