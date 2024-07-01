import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto, Produtos } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  // Injeção de dependências

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  buscaProdutos(): Observable<Produtos> {
    return this.http.get<Produtos>(this.baseUrl + 'produtos');
  }

  buscaProdutoPorId(id: string): Observable<Produto> {
    return this.http.get<Produto>(this.baseUrl + 'produtos/' + id);
  }

  atualizaProduto(produto: Produto): Observable<any> {
    return this.http.put<Produto>(this.baseUrl + 'produtos/' + produto.id, produto);
  }

  criarProduto(produto: Produto): Observable<any> {
    return this.http.post<Produto>(this.baseUrl + 'produtos', produto);
  }

  deletarProduto(produto: Produto): Observable<any> {
    return this.http.delete(this.baseUrl + 'produtos/' + produto.id);
  }



}
