import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../services/grupo.service';
import { Grupo } from '../models/grupo';
import { MatTable } from "@angular/material/table";
import { MatTableModule } from "@angular/material/table";
import { RouterLink } from "@angular/router";
import { MatCardActions } from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { Pessoa } from '../models/pessoa';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-grupo-list',
  standalone: true,
  imports: [
    MatTable,
    MatTableModule,
    RouterLink,
    MatCardActions,
    MatButton
  ],
  templateUrl: './grupo-list.component.html',
  styleUrls: ['./grupo-list.component.css']
})
export class GrupoListComponent implements OnInit {
  grupos: Grupo[] = [];
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'pessoa', 'config'];

  constructor(private grupoService: GrupoService, private formService: FormService) {}


  ngOnInit(): void {
    this.grupoService.getGrupos().subscribe((data) => {
      this.grupos = data;
    });
  }

  removerGrupo(grupo: Grupo) {
    this.grupoService.deletarGrupo(grupo.id).subscribe(() => {
      this.grupos = this.grupos.filter(g => g.id !== grupo.id);
    });
  }
}
