import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrigenModel } from 'src/app/Interfaces/Origen';

@Injectable({
  providedIn: 'root'
})
export class OrigenServiceService {

  constructor(private HttpRequest: HttpClient) { }

  EndpointBackend: string = "https://localhost:5001/api/Origen/";

  GetOrigenAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostOrigen(usuario: OrigenModel): Observable<OrigenModel> {

    return this.HttpRequest.post<OrigenModel>(this.EndpointBackend, usuario);
  }

 
  PutOrigen(update:OrigenModel){

    return this.HttpRequest.put(this.EndpointBackend,update);
  }

  DeleteOrigen(idOrigen:string):Observable<string>{

    return this.HttpRequest.delete<string>(this.EndpointBackend+idOrigen);

  }
}
