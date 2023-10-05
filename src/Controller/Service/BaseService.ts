import { Response } from "./Response"

export abstract class BaseService{
    protected async post(connectionString:string,body:{},headers:Headers | null=null):Promise<Response>{
        const response= await fetch(connectionString,{
          method:'POST',
          headers: headers ?? new Headers({
            'Content-Type': 'application/json'
        }), 
          body:JSON.stringify(body)
        })
        
        if(!response.ok) {
          return new Response(null,response.status,{"error":response.statusText})
        }
        const data= await response.json()
        return new Response(data)
    }

    protected async get(url:string,headers:Headers | null=null):Promise<Response>{
        const response= await fetch(url,{
          method:'GET',
          headers: headers ?? new Headers({
            'Content-Type': 'application/json'
        })})
        if(!response.ok) {
          return new Response(null,response.status,{"error":response.statusText})
        }
        const data= await response.json()
        return new Response(data)
    }

    protected async put(url:string,body:{},headers:Headers | null=null):Promise<Response>{
        const response= await fetch(url,{
            method:'PUT',
            headers: headers ?? new Headers({
              'Content-Type': 'application/json'
          }), 
            body:JSON.stringify(body)
          })
          if(!response.ok) {
            return new Response(null,response.status,{"error":response.statusText})
          }
        const data= await response.json()
        return new Response(data)
    }

    protected async delete(url:string,body:{},headers:Headers | null=null):Promise<Response>{
        const response= await fetch(url,{
            method:'DELETE',
            headers: headers ?? new Headers({
              'Content-Type': 'application/json'
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