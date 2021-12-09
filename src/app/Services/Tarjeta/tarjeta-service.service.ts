import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaModel } from 'src/app/Interfaces/Tarjeta';

@Injectable({
  providedIn: 'root'
})
export class TarjetaServiceService {

  constructor(private HttpRequest: HttpClient) { }

  EndpointBackend: string = "https://localhost:5001/api/Tarjeta/";

  GetTarjetaAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostTarjeta(usuario: TarjetaModel): Observable<TarjetaModel> {

    return this.HttpRequest.post<TarjetaModel>(this.EndpointBackend, usuario);
  }

 
  PutTarjeta(update:TarjetaModel){

    return this.HttpRequest.put(this.EndpointBackend,update);
  }

  DeleteTarjeta(idTarjeta:string):Observable<string>{

    return this.HttpRequest.delete<string>(this.EndpointBackend+idTarjeta);

  }
}
