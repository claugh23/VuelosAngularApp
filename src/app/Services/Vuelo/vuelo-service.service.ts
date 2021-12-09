import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VueloModel } from 'src/app/Interfaces/Vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloServiceService {

  constructor(private HttpRequest: HttpClient) { }

  EndpointBackend: string = "https://localhost:5001/api/Vuelo/";

  GetVueloAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostVuelo(Vuelo: VueloModel): Observable<VueloModel> {

    return this.HttpRequest.post<VueloModel>(this.EndpointBackend, Vuelo);
  }


  PutVuelo(update: VueloModel) {

    return this.HttpRequest.put(this.EndpointBackend, update);
  }

  DeleteVuelo(idVuelo: string): Observable<string> {

    return this.HttpRequest.delete<string>(this.EndpointBackend + idVuelo);

  }
}
