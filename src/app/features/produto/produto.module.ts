import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    CadastroComponent,
    ListagemComponent,
  ]
})
export class ProdutoModule { }
