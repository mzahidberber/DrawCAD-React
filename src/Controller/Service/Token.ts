


export class Token{
    private _accessToken:string
    private _accessTokenExpirationSTR:string
    private _accessTokenExpiration:Date
    private _refreshToken:string
    private _refreshTokenExpirationSTR:string
    private _refreshTokenExpiration:Date

    
    public get accessToken() : string {
        return this._accessToken
    }

    
    public get accessTokenExpiration() : Date {
        return this._accessTokenExpiration
    }

    
    public get refreshToken() : string {
        return this._refreshToken
    }

    
    public get refreshTokenExpiration() : Date {
        return this._refreshTokenExpiration
    }
    
    
    
    
    constructor(elementInfo:{});
    constructor(accessToken:string,accessTokenExpirationSTR:string,refreshToken:string,refreshTokenExpirationSTR:string);
    
    constructor(...arr :any[]){
        if(typeof arr[0]==="object" && arr[0] !== null){
            this._accessToken=arr[0]["accessToken"]
            this._accessTokenExpirationSTR=arr[0]["accessTokenExpiration"]
            this._accessTokenExpiration=new Date(this._accessTokenExpirationSTR)
            this._refreshToken=arr[0]["refreshToken"]
            this._refreshTokenExpirationSTR=arr[0]["refreshTokenExpiration"]
            this._refreshTokenExpiration=new Date(this._refreshTokenExpirationSTR)
        }
        else{
            this._accessToken=arr[0]
            this._accessTokenExpirationSTR=arr[1]
            this._accessTokenExpiration=new Date(this._accessTokenExpirationSTR)
            this._refreshToken=arr[2]
            this._refreshTokenExpirationSTR=arr[3]
            this._refreshTokenExpiration=new Date(this._refreshTokenExpirationSTR)
        }
        
    }

    public toDict():{}{
        return {
            "accessToken": this._accessToken,
            "accessTokenExpiration": this._accessTokenExpirationSTR,
            "refreshToken": this._refreshToken,
            "refreshTokenExpiration": this._refreshTokenExpirationSTR
        }
    }
}