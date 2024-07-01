import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { response } from 'express';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  id!: string;
  produto!: Produto
  icon: string = '';
  nome: string = '';
  descricao: string = '';
  imagemUrl: string = '';
  preco: string = '';
  estoque: number = 0;
  tituloPagina: string = '';
  rota: string = '';
  isNovoProduto: boolean = false;

  constructor(private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    this.rota = this.activatedRoute.snapshot.url[0].path
    if (this.rota === 'editar-produto') {
      this.tituloPagina = "Editar produto"
      this.icon = 'edit'
      this.id = this.activatedRoute.snapshot.params['id']
      this.produtoService.buscaProdutoPorId(this.id).subscribe(
        (produto: Produto) => {
          // this.id = produto.id;
          this.produto = produto;
          this.nome = this.produto.nome;
          this.imagemUrl = this.produto.imagemUrl;
          this.descricao = this.produto.descricao;
          this.preco = this.produto.preco;
          this.estoque = this.produto.estoque;
        })
    } else {
      this.isNovoProduto = true;
      this.tituloPagina = "Adicionar produto"
      this.icon = 'add'
    }
  }

  salvarProduto(): void {
    const data = {
      id: this.id,
      nome: this.nome,
      descricao: this.descricao,
      imagemUrl: this.imagemUrl,
      preco: this.preco,
      estoque: this.estoque
    }

    if (this.isNovoProduto) {
      this.criarProduto(data)
    } else {
      this.atualizarProduto(data)
    }
  }

  atualizarProduto(data: Produto) {
    this.produtoService.atualizaProduto(data).subscribe(response => {
      try {
        alert('Produto atualizado com sucesso!')
        this.router.navigate(['/produto', 'listagem'])
      } catch (err) {
        console.error(err)
      }
    })
  }
  criarProduto(data: Produto) {
    this.produtoService.criarProduto(data).subscribe(response => {
      try {
        alert('Produto criado com sucesso!')
        this.router.navigate(['/produto', 'listagem'])
      } catch (err) {
        console.error(err)
      }
    })
  }
}
