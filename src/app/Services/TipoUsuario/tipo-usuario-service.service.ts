import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoUsuarioModel } from 'src/app/Interfaces/TipoUsuario';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioServiceService {

  constructor(private HttpRequest: HttpClient) { }

  EndpointBackend: string = "https://localhost:5001/api/TipoUsuario/";

  GetTipoUsuarioAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostTipoUsuario(usuario: TipoUsuarioModel): Observable<TipoUsuarioModel> {

    return this.HttpRequest.post<TipoUsuarioModel>(this.EndpointBackend, usuario);
  }

 
  PutTipoUsuario(update:TipoUsuarioModel){

    return this.HttpRequest.put(this.EndpointBackend,update);
  }

  DeleteTipoUsuario(idTipoUsuario:string):Observable<string>{

    return this.HttpRequest.delete<string>(this.EndpointBackend+idTipoUsuario);

  }
}
