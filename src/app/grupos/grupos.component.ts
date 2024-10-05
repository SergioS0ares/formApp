import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { GrupoService } from '../services/grupo.service';
import { FormsModule, NgForm } from "@angular/forms";
import { Grupo } from "../models/grupo";
import { Pessoa } from "../models/pessoa";
import { Router } from "@angular/router";
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-grupo-formulario',
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
  styleUrls: ['./grupos.component.css']
})

export class GruposComponent implements OnInit {

  grupo: Grupo = {
    id: 0,
    nome: '',
    descricao: '',
    pessoaid: 0
  };

  grupos: Grupo[] = [];
  pessoas: Pessoa[] = []; // Array de pessoas

  constructor(private _grupoService: GrupoService, private _formService: FormService, private _router: Router) {}

  ngOnInit() {
    // Carregar pessoas no select
    this._formService.getPessoas().subscribe({
      next: (pessoas: Pessoa[]) => {
        this.pessoas = pessoas;  // Armazena a lista de pessoas no array
      },
      error: (error) => {
        console.error('Erro ao obter pessoas', error);
      }
    });

    // Carregar a lista de grupos
    this._grupoService.getGrupos().subscribe({
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

      // Logar o objeto grupo para verificar se os dados estão corretos
      console.log('Grupo enviado:', this.grupo);

      // Chama o serviço para salvar o grupo
      this._grupoService.salvarGrupo(this.grupo).subscribe({
        next: (data) => {
          console.log('Grupo salvo com sucesso', data);

          // Adiciona o novo grupo ao array de grupos
          this.grupos.push(data);

          // Redefinir o formulário e o objeto grupo
          myForm.reset();
          this.grupo = {
            id: 0,
            nome: '',
            descricao: '',
            pessoaid: 0  // Reseta o id da pessoa
          };

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
