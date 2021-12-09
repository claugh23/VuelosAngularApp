import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IntinerarioModel } from 'src/app/Interfaces/Intinerario';

@Injectable({
  providedIn: 'root'
})
export class IntinerarioServiceService {

  constructor(private HttpRequest: HttpClient) { }

  EndpointBackend: string = "https://localhost:5001/api/Intinerario/";

  GetIntinerarioAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostIntinerario(usuario: IntinerarioModel): Observable<IntinerarioModel> {

    return this.HttpRequest.post<IntinerarioModel>(this.EndpointBackend, usuario);
  }

 
  PutIntinerario(update:IntinerarioModel){

    return this.HttpRequest.put(this.EndpointBackend,update);
  }

  DeleteIntinerario(idIntinerario:string):Observable<string>{

    return this.HttpRequest.delete<string>(this.EndpointBackend+idIntinerario);

  }
}
