import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TPasajesModel } from 'src/app/Interfaces/TPasajes';

@Injectable({
  providedIn: 'root'
})
export class PasajesServiceService {

  constructor(private HttpRequest: HttpClient) { }

  EndpointBackend: string = "https://localhost:5001/api/TPasajes/";

  GetPasajesAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostPasajes(usuario: TPasajesModel): Observable<TPasajesModel> {

    return this.HttpRequest.post<TPasajesModel>(this.EndpointBackend, usuario);
  }

 
  PutPasajes(update:TPasajesModel){

    return this.HttpRequest.put(this.EndpointBackend,update);
  }

  DeletePasajes(idPasajes:string):Observable<string>{

    return this.HttpRequest.delete<string>(this.EndpointBackend+idPasajes);

  }
}
