import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NovoComponent } from './componentes/novo/novo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'novo', component: NovoComponent },
  { path: 'produto', loadChildren: () => import('./features/produto/produto.module').then(m => m.ProdutoModule) },

];
