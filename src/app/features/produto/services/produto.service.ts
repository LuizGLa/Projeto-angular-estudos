import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // Injeção de dependências

  private baseUrl = 'https://viacep.com.br/ws/01001000/json/';

  constructor(private http: HttpClient) {
  }

  buscaCidadePeloCep() {
    return this.http.get(this.baseUrl);
  }
}
