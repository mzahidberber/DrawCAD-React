import { Response } from "./Response"
import { Token } from "./Token"

export abstract class BaseService{
    protected async postAsync(connectionString:string,body:{},token:Token|null=null):Promise<Response>{
        const response= await fetch(connectionString,{
          method:'POST',
          headers: token==null ? new Headers({
            'Content-Type': 'application/json',
            }): new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.accessToken}`,
            }), 
          body:JSON.stringify(body)
        })
        
        if(!response.ok) {
          return new Response(null,response.status,{"error":response.statusText})
        }
        const data= await response.json()
        return new Response(data)
    }

    protected async getAsync(url:string,token:Token|null=null):Promise<Response>{
        const response= await fetch(url,{
          method:'GET',
          headers: token==null ? new Headers({
            'Content-Type': 'application/json',
            }): new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.accessToken}`,
            })})
        if(!response.ok) {
          return new Response(null,response.status,{"error":response.statusText})
        }
        const data= await response.json()
        return new Response(data)
    }

    protected async putAsync(url:string,body:{},token:Token|null=null):Promise<Response>{
        const response= await fetch(url,{
            method:'PUT',
            headers: token==null ? new Headers({
              'Content-Type': 'application/json',
              }): new Headers({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token.accessToken}`,
              }), 
            body:JSON.stringify(body)
          })
          if(!response.ok) {
            return new Response(null,response.status,{"error":response.statusText})
          }
        const data= await response.json()
        return new Response(data)
    }

    protected async deleteAsync(url:string,body:{},token:Token|null=null):Promise<Response>{
        const response= await fetch(url,{
            method:'DELETE',
            headers: token==null ? new Headers({
              'Content-Type': 'application/json',
              }): new Headers({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token.accessToken}`,
              }), 
            body:JSON.stringify(body)
        })
        if(!response.ok) {
          return new Response(null,response.status,{"error":response.statusText})
        }
        const data= await response.json()
        return new Response(data)
    }
}