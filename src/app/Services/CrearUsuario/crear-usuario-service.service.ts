import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserModel } from 'src/app/Interfaces/CrearUsuario';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioServiceService {

  constructor(private HttpRequest: HttpClient) { }

  EndpointBackend: string = "https://localhost:5001/api/CrearUsuario";

  //Endpoint para la autenticacion de usuario mediante "autenticado" o "no autenticado"
  PostAuthenticateUser(credentials: CreateUserModel) {

    return this.HttpRequest.post(this.EndpointBackend+"/Authenticate", credentials);
  }

 

  GetCrearUsuarioAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostCrearUsuario(usuario: CreateUserModel): Observable<CreateUserModel> {

    return this.HttpRequest.post<CreateUserModel>(this.EndpointBackend, usuario);
  }


  PutCrearUsuario(update: CreateUserModel) {

    return this.HttpRequest.put(this.EndpointBackend, update);
  }

  DeleteCrearUsuario(idCrearUsuario: string): Observable<string> {

    return this.HttpRequest.delete<string>(this.EndpointBackend + idCrearUsuario);

  }

}
