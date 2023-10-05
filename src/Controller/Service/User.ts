

export class User{
    private _id:string
    private _username:string
    private _email:string

    
    public get id() : string {
        return this._id
    }
    
    
    public get email() : string {
        return this._email
    }

    
    public get username() : string {
        return this._username
    }
    
    
    constructor(elementInfo:{});
    constructor(id:string,username:string,email:string);
    
    constructor(...arr:any[]){
        if(typeof arr[0]==="object" && arr[0] !== null){
            this._id=arr[0]["id"]
            this._username=arr[0]["userName"]
            this._email=arr[0]["email"]

        }
        else{
            this._id=arr[0]
            this._username=arr[1]
            this._email=arr[2]
        }
        
    }

    public toDict():{}{
        return {
            "id": this._id,
            "userName": this._username,
            "email": this._email
        }
    }
}