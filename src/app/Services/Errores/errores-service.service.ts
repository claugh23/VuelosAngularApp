import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErroresModel } from 'src/app/Interfaces/Erorres';

@Injectable({
  providedIn: 'root'
})
export class ErroresServiceService {

  constructor(private HttpRequest: HttpClient) { }

  EndpointBackend: string = "https://localhost:5001/api/Errores/";

  GetErroresAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostErrores(usuario: ErroresModel): Observable<ErroresModel> {

    return this.HttpRequest.post<ErroresModel>(this.EndpointBackend, usuario);
  }

 
  PutErrores(update:ErroresModel){

    return this.HttpRequest.put(this.EndpointBackend,update);
  }

  DeleteErrores(idErrores:string):Observable<string>{

    return this.HttpRequest.delete<string>(this.EndpointBackend+idErrores);

  }
}
