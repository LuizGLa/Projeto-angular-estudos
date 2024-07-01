import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto, Produtos } from '../models/produto.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent implements OnInit {
  produtos!: Produtos;
  constructor(private produtoService: ProdutoService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.produtoService.buscaProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(this.produtos);
      }
    )
    this.produtos[0]
  }

  selecionaProduto(produto: Produto) {
    console.log(produto.id);
    this.router.navigate(['/produto', 'editar-produto', produto.id]);
  }
  adicionarProduto() {
    this.router.navigate(['/produto', 'novo-produto']);
  }
}

