import { Response } from "./Response"

export abstract class BaseService{
    protected async post(url:string,headers:Headers,body:{}):Promise<Response>{
        const response= await fetch(url,{
          method:'POST',
          headers: headers, 
          body:JSON.stringify(body)
        })
        if(!response.ok) throw Error("asdasd")
        const data= await response.json()
        return new Response(data)
    }

    protected async get(url:string,headers:Headers):Promise<Response>{
        const response= await fetch(url,{
          method:'GET',
          headers: headers
        })
        if(!response.ok) throw Error("asdasd")
        const data= await response.json()
        return new Response(data)
    }

    protected async put(url:string,headers:Headers,body:{}):Promise<Response>{
        const response= await fetch(url,{
            method:'PUT',
            headers: headers, 
            body:JSON.stringify(body)
          })
        if(!response.ok) throw Error("asdasd")
        const data= await response.json()
        return new Response(data)
    }

    protected async delete(url:string,headers:Headers,body:{}):Promise<Response>{
        const response= await fetch(url,{
            method:'DELETE',
            headers: headers, 
            body:JSON.stringify(body)
          })
        if(!response.ok) throw Error("asdasd")
        const data= await response.json()
        return new Response(data)
    }
}