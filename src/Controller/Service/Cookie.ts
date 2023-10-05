import Cookies from "universal-cookie"
import { Token } from "./Token"

export enum CookieNames{
    token="token",
    email="email"
}

export class Cookie{
    private _cookie:Cookies

    constructor(){
        this._cookie=new Cookies()
    }

    convertObjectToToken(data:any):Token{
        return new Token({
            "accessToken": data["_accessToken"],
            "accessTokenExpiration": data["_accessTokenExpirationSTR"],
            "refreshToken": data["_refreshToken"],
            "refreshTokenExpiration": data["_refreshTokenExpirationSTR"]
        })
    }

    checkToken = ():boolean => this._cookie.get(CookieNames.token)===undefined ? false : true 
    checkEmail = ():boolean => this._cookie.get(CookieNames.email)===undefined ? false : true 

    getToken=():Token | null => this.checkToken() ? this.convertObjectToToken(this.get(CookieNames.token)):null
    getEmail=():string | null => this.checkToken() ? this.get(CookieNames.email):null

    setToken(data:Object){
        this.set(CookieNames.token,data)
    }

    setEmail(email:string){
        this.set(CookieNames.email,email)
    }

    removeToken(){
        this._cookie.remove(CookieNames.token)
    }

    removeEmail(){
        this._cookie.remove(CookieNames.email)
    }

    removeAll(){
        this._cookie.remove(CookieNames.token)
        this._cookie.remove(CookieNames.email)
    }

    remove(name:string){
        this._cookie.remove(name)
    }

    set (name:string,data:any){
        this._cookie.set(name,data, { path: '/' })
    }
    
    get = (name:string) => this._cookie.get(name)
}