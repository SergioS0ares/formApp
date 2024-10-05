import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Grupo } from "../models/grupo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private apiUrl = 'http://localhost:8080/api/grupos'; // URL do seu backend Spring

  constructor(private http: HttpClient) { }

  getGrupoById(id: number): Observable<Grupo> {
    return this.http.get<Grupo>(`${this.apiUrl}/${id}`);
  }

  // Método para salvar um grupo

  salvarGrupo(grupo: Grupo): Observable<Grupo> {
    return this.http.post<Grupo>(this.apiUrl, grupo);
  }

  // Método para deletar um grupo
  deletarGrupo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método para obter a lista de grupos
  // grupo.service.ts

  getGrupos(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.apiUrl);
  }

}
