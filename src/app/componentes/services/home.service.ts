import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  // Métodos para busca de dados

  buscaClientes(): Observable<any> {
    return this.http.get(this.baseUrl + 'clientes');
  }


}
