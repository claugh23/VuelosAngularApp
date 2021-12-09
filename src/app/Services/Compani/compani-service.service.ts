import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompaniModel } from 'src/app/Interfaces/Compani';

@Injectable({
  providedIn: 'root'
})
export class CompaniServiceService {

  constructor(private HttpRequest: HttpClient) { }

  EndpointBackend: string = "https://localhost:5001/api/Compani/";

  GetCompaniAll() {

    return this.HttpRequest.get(this.EndpointBackend);
  }

  PostCompani(usuario: CompaniModel): Observable<CompaniModel> {

    return this.HttpRequest.post<CompaniModel>(this.EndpointBackend, usuario);
  }


  PutCompani(update: CompaniModel) {

    return this.HttpRequest.put(this.EndpointBackend, update);
  }

  DeleteCompani(idCompani: string): Observable<string> {

    return this.HttpRequest.delete<string>(this.EndpointBackend + idCompani);

  }
}
