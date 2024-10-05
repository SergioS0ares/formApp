// grupo.model.ts
import { Pessoa } from './pessoa';

export interface Grupo {
  id: number;
  nome: string;
  descricao: string;
  pessoaid: number;
  pessoa?: Pessoa; // Adiciona a propriedade pessoa opcionalmente
}
