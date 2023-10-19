import { Response } from "./Response"
import { Token } from "./Token"

export abstract class BaseService{
    protected async postAsync(connectionString:string,body:{} | null,token:Token|null=null):Promise<Response>{
        let init:RequestInit={}
        let headerInit:HeadersInit={
          'Content-Type': 'application/json'
        }
        if (token) headerInit["Authorization"]=`Bearer ${token.accessToken}`
        init.method="POST"
        init.headers=headerInit
        init.body=body?JSON.stringify(body):null
        const response= await fetch(connectionString,init)
        if(!response.ok) {
          return new Response(null,response.status,{"error":response.statusText})
        }
        const data= await response.json()
        return new Response(data)
    }

    protected async getAsync(connectionString:string,body:{} | null,token:Token|null=null):Promise<Response>{
      let init:RequestInit={}
      let headerInit:HeadersInit={
        'Content-Type': 'application/json'
      }
      if (token) headerInit["Authorization"]=`Bearer ${token.accessToken}`
      init.method="GET"
      init.headers=headerInit
      init.body=body?JSON.stringify(body):null
      const response= await fetch(connectionString,init)
        if(!response.ok) {
          return new Response(null,response.status,{"error":response.statusText})
        }
        const data= await response.json()
        return new Response(data)
    }

    protected async putAsync(connectionString:string,body:{} | null=null,token:Token|null=null):Promise<Response>{
        let init:RequestInit={}
        let headerInit:HeadersInit={
          'Content-Type': 'application/json'
        }
        if (token) headerInit["Authorization"]=`Bearer ${token.accessToken}`
        init.method="PUT"
        init.headers=headerInit
        init.body=body?JSON.stringify(body):null
        const response= await fetch(connectionString,init)
          if(!response.ok) {
            return new Response(null,response.status,{"error":response.statusText})
          }
        const data= await response.json()
        return new Response(data)
    }

    protected async deleteAsync(connectionString:string,body:{},token:Token|null=null):Promise<Response>{
        let init:RequestInit={}
        let headerInit:HeadersInit={
          'Content-Type': 'application/json'
        }
        if (token) headerInit["Authorization"]=`Bearer ${token.accessToken}`
        init.method="DELETE"
        init.headers=headerInit
        init.body=body?JSON.stringify(body):null
        const response= await fetch(connectionString,init)
        if(!response.ok) {
          return new Response(null,response.status,{"error":response.statusText})
        }
        const data= await response.json()
        return new Response(data)
    }
}