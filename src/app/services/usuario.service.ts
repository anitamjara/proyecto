import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';


@Injectable()
export class UsuarioService{

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    pruebas() {
        return "Soy el servicio de usuario";
    }

    signup(usuario:any):Observable<any>{
        let params = JSON.stringify(usuario);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'signup', params, {headers:headers});
    }

}


