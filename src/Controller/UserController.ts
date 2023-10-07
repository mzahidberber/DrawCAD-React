
import { AuthService } from "./Service/AuthService";
import { Cookie } from "./Service/Cookie";
import { Token } from "./Service/Token";
import { User } from "./Service/User";


export class UserController{
    private _userService:AuthService
    private _user:User | null =null
    private _token:Token | null=null
    private _cookie:Cookie

    constructor() {
        this._userService=new AuthService()
        this._cookie=new Cookie()
        this._token=this._cookie.getToken()
    }

    // async register(username: string,email: string,password: string):Promise<boolean>{
        
    // }

    getEmail=():string | null => this._cookie.getEmail()
    checkLogin = ():boolean => this._token ? true : false
    logout = () => this._cookie.removeAll()
       
    async login(email:string,password:string):Promise<boolean>{
        if(!this._cookie.checkToken()) {
            this._token=await this._userService.createTokenAsync(email,password)
            if(this._token) {
                this._cookie.setToken(this._token)
                this._cookie.setEmail(email)
            }
        }
        else {
            this._token=this._cookie.getToken()
        }
        return this._token ? true : false
    }

}