import Editora from '../modelo/Editora';

const editoras: Editora[] = [
  {
    codEditora: 1,
    nome: 'O Poder do Hábito',
    autor: 'Charles Dumming',
  },
  {
    codEditora: 2,
    nome: 'O Hobbit',
    autor: 'Tolkien',
  },
  {
    codEditora: 3,
    nome: 'Neuromancer',
    autor: 'William Gibson',
  },
];

export class ControleEditora {
  public getEditoras = (): Editora[] => {
    return editoras;
  };

  public getNomeEditora = (codEditora: number): string => {
    const editoraEncontrada = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    } else {
      throw new Error('Editora não encontrada');
    }
  };

  public getEditora = (codEditora: number): Editora | undefined => {
    return editoras.find((editora) => editora.codEditora === codEditora);
  };
}
