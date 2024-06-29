import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent implements OnInit {

  constructor(private produtoService: ProdutoService) {

  }
  ngOnInit(): void {
    this.produtoService.buscaCidadePeloCep().subscribe(resposta => {
      console.log(resposta);
    });
  }

}
