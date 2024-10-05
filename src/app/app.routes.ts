import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { GruposComponent } from './grupos/grupos.component';

import { GrupoListComponent } from './grupo-list/grupo-list.component';

export const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'pessoa-list', component: PessoaListComponent },
  { path: 'grupo', component: GruposComponent }, // Rota para o formulário de grupos
  { path: 'grupo-list', component: GrupoListComponent }, // Rota para a lista de grupos
  { path: '', redirectTo: '/pessoa-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/formulario' },

];
