import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Editora[];

  constructor() {
    this.editoras = [
      {
        codEditora: 1,
        nome: 'Harry Potter',
        autor: 'JK Rowling',
      },
      {
        codEditora: 2,
        nome: 'Guerra dos Tronos',
        autor: 'George RR Martin',
      },
      {
        codEditora: 3,
        nome: 'O Alquimista',
        autor: 'Paulo Coelho',
      },
    ];
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter((e) => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }
}
