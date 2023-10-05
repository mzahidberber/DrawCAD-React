


export class UrlBuilder{
    private _url:string
    private _params:string

    constructor(){
        this._url=""
        this._params=""
    }

    url(url:string):UrlBuilder{
        if(this._url==="") this._url+=url
        else this._url+=`/${url}`
        return this
    }

    params(param:string):UrlBuilder{
        if(this._params==="") this._params+=`?${param}`
        else this._params+=`/&${param}`
        return this
    }

    paramsUsernameAndPassword(username:string,password:string):UrlBuilder{
        if(this._params==="") this._params+=`?username=${username}&password=${password}`
        return this
    }

    build():string{
        return this._url+this._params
    }
}