import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/Interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private HttpRequest: HttpClient) { }

  EndpointBackend: string = "https://localhost:5001/api/Usuario/";

  GetUsuarioAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostUsuario(usuario: UsuarioModel): Observable<UsuarioModel> {

    return this.HttpRequest.post<UsuarioModel>(this.EndpointBackend, usuario);
  }


  PutUsuario(update: UsuarioModel) {

    return this.HttpRequest.put(this.EndpointBackend, update);
  }

  DeleteUsuario(idUsuario: string): Observable<string> {

    return this.HttpRequest.delete<string>(this.EndpointBackend + idUsuario);

  }
}
