export interface Produto {
  nome: string;
  descricao: string;
  preco: string;
  estoque: number;
  imagemUrl: string;
  id?: string;
}

export interface Produtos extends Array<Produto> { }
