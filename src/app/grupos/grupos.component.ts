import { Component, OnInit } from '@angular/core';
import { FormService } from "../services/form.service";
import { Router, RouterModule } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { GrupoService } from "../services/grupo.service";
import { Pessoa } from "../models/pessoa";
import { Grupo } from "../models/grupo";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatOptionModule } from "@angular/material/core";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Necessário se o componente usar diretivas de roteamento
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatToolbarModule
  ],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.css'
})
export class GruposComponent implements OnInit {

  pessoas: Pessoa[] = [];  // Lista de pessoas carregada pelo FormService
  grupos: Grupo[] = [];    // Array de grupos
  grupo: Grupo = {
    id: 0,
    nome: '',
    descricao: '',
    pessoaid: 0
  };

  constructor(
    private _FormService: FormService,
    private _router: Router,
    private _GrupoService: GrupoService
  ) {}

  ngOnInit() {
    // Carregar pessoas no select
    this._FormService.getPessoas().subscribe({
      next: (pessoas: Pessoa[]) => {
        this.pessoas = pessoas;  // Armazena a lista de pessoas no array pessoas
      },
      error: (error) => {
        console.error('Erro ao obter pessoas', error);
      }
    });

    // Carregar a lista de grupos
    this._GrupoService.getGrupos().subscribe({
      next: (grupos: Grupo[]) => {
        this.grupos = grupos;  // Armazena a lista de grupos
      },
      error: (error) => {
        console.error('Erro ao obter grupos', error);
      }
    });
  }

  // Método chamado ao submeter o formulário
  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      // Validação: Nome do grupo não pode ser vazio
      if (!this.grupo.nome.trim()) {
        alert('O nome do grupo é obrigatório.');
        return;
      }

      // Validação: Pessoa deve ser selecionada
      if (!this.grupo.pessoaid) {
        alert('Você precisa selecionar uma pessoa.');
        return;
      }

      // Chama o serviço para salvar o grupo
      this._GrupoService.salvarGrupo(this.grupo).subscribe({
        next: (data) => {
          console.log('Grupo salvo com sucesso', data);

          // Adiciona o novo grupo ao array de grupos
          this.grupos.push(data);

          // Redefinir o formulário e o objeto grupo
          myForm.reset();
      

          // Redireciona para a lista de grupos
          this._router.navigate(['/grupo-list']);
        },
        error: (error) => {
          console.error('Erro ao salvar o grupo', error);
        },
      });
    }
  }
}
