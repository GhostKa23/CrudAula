import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  standalone: false,
  templateUrl: './cadastrar-produto.html',
  styleUrl: './cadastrar-produto.css',
})
export class CadastrarProduto {
  nome: string = '';
  validade: string = '';
  preco: number = 0;

  salvarProduto(): void { 
    console.log('Nome: ', this.nome);
    console.log('Validade: ', this.validade);
    console.log('Preço: ', this.preco);
    alert('Salvo com sucesso!')
  };

}
