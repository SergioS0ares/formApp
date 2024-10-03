import {Component, OnInit} from '@angular/core';
import {FormService} from "../services/form.service";
import {Pessoa} from "../models/pessoa";
import {MatTable} from "@angular/material/table";
import {MatTableModule} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatCardActions} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-grupo-list-component',
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
export class GrupoListComponentComponent {

}
