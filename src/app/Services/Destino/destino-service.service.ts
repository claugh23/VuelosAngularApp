import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinoModel } from 'src/app/Interfaces/Destino';

@Injectable({
  providedIn: 'root'
})
export class DestinoServiceService {

  constructor(private HttpRequest: HttpClient) { }

  EndpointBackend: string = "https://localhost:5001/api/Destino/";

  GetDestinoAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostDestino(usuario: DestinoModel): Observable<DestinoModel> {

    return this.HttpRequest.post<DestinoModel>(this.EndpointBackend, usuario);
  }

 
  PutDestino(update:DestinoModel){

    return this.HttpRequest.put(this.EndpointBackend,update);
  }

  DeleteDestino(idDestino:string):Observable<string>{

    return this.HttpRequest.delete<string>(this.EndpointBackend+idDestino);

  }
}
