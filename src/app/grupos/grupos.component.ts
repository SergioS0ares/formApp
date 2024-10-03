import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../services/grupo.service';
import { Grupo } from '../models/grupo';
import { MatTable } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardActions } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-grupo-list',
  standalone: true,
  imports: [
    MatTable,
    DatePipe,
    MatTableModule,
    RouterLink,
    MatCardActions,
    MatButton
  ],
  templateUrl: './grupo-list-component.component.html',
  styleUrl: './grupo-list-component.component.css'
})
export class GrupoListComponent implements OnInit {
  grupos: Grupo[] = [];
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'pessoa', 'config'];

  constructor(private grupoService: GrupoService) { }

  ngOnInit(): void {
    // Busca os grupos do serviço
    this.grupoService.getGrupos().subscribe((data) => {
      this.grupos = data;
    });
  }

  removerGrupo(grupo: Grupo) {
    this.grupoService.deletarGrupo(grupo.id).subscribe(() => {
      // Remove o grupo da lista após exclusão
      this.grupos = this.grupos.filter(g => g.id !== grupo.id);
    });
  }
}
