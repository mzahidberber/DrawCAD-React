import { BaseService } from "./BaseService";
import { Response } from "./Response";
import { UrlBuilder } from "./UrlBuilder";
import { api } from "./Urls";


export class AuthService extends BaseService{
    async createToken(email:string,password:string):Promise<Response>{
        let connectionString=new UrlBuilder().url(api).url("auth").url("createtoken").build()
        const reponse= await this.post(connectionString,new Headers({
            // 'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        }),{
            "email": email,
            "password": password
        })
        return reponse
    }
}