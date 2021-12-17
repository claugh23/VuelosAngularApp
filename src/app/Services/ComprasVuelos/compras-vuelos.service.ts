import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComprasVueloModel } from 'src/app/Interfaces/CompraVuelos';

@Injectable({
  providedIn: 'root'
})
export class ComprasVuelosService {

  EndpointBackend: string = "https://localhost:5001/api/ComprasVuelos";

  constructor(private HttpRequest:HttpClient) { }
  GetComprasVuelosAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostComprasVuelos(usuario: ComprasVueloModel): Observable<ComprasVueloModel> {

    return this.HttpRequest.post<ComprasVueloModel>(this.EndpointBackend, usuario);
  }


  PutComprasVuelos(update: ComprasVueloModel) {

    return this.HttpRequest.put(this.EndpointBackend, update);
  }

  DeleteComprasVuelos(idComprasVuelos: string): Observable<string> {

    return this.HttpRequest.delete<string>(this.EndpointBackend + idComprasVuelos);

  }
}
