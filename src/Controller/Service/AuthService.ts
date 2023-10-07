import { BaseService } from "./BaseService";
import { Token } from "./Token";
import { UrlBuilder } from "./UrlBuilder";
import {  auth } from "./Urls";
import { User } from "./User";


export class AuthService extends BaseService{

    async createTokenAsync(email:string,password:string):Promise<Token | null>{
        let connectionString=new UrlBuilder().url(auth).url("auth").url("createtoken").build()
        const reponse= await this.postAsync(connectionString,{
            "email": email,
            "password": password
        })
        return reponse.data ? new Token(reponse.data) : null
    }

    async revokeTokenAsync(token:Token):Promise<boolean>{
        let connectionString=new UrlBuilder().url(auth).url("auth").url("revokerefreshtoken").build()
        const reponse= await this.postAsync(connectionString,{
            "token": token
            })
        return reponse.statusCode===200 ? true : false
    }

    async refreshTokenAsync(token:Token):Promise<Token | null>{
        let connectionString=new UrlBuilder().url(auth).url("auth").url("createtokenbyrefreshtoken").build()
        const reponse= await this.postAsync(connectionString,{
            "token": token
            })
        return reponse.statusCode===200 ? reponse.data ? new Token(reponse.data): null : null
    }


    async createUserAsync(username: string,email: string,password: string):Promise<User | null>{
        let connectionString=new UrlBuilder().url(auth).url("User").url("createuser").build()
        const reponse= await this.postAsync(connectionString,{"userName": username,"email":email,"password": password})
        return reponse.statusCode===200 ? reponse.data ? new User(reponse.data):null : null
    }
}