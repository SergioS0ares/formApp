import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoListComponentComponent } from './grupo-list-component/grupo-list-component.component';

export const routes: Routes = [
    { path: 'formulario', component: FormularioComponent },
    { path: 'pessoa-list', component: PessoaListComponent },
    { path: 'grupo', component: GruposComponent },
    { path: 'grupo-list', component: GrupoListComponentComponent }, // Rota para lista de grupos
    { path: '', redirectTo: '/pessoa-list', pathMatch: 'full' }, // Redirecionamento padrão
    { path: '**', redirectTo: '/formulario' } // Rota coringa para rotas desconhecidas
];
