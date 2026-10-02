import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css',
})
export class ListarProdutos {
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Kaique',
    idade: 24,
    altura: 1.83,
    graduado: true
  };

  listaProdutos:any[]= [
    {nome: 'Curso de Angular', precoProduto: 35.56, validade: '2026-12-31', id:1},
    {nome: 'Curso de Three.js', precoProduto: 50.50, validade: '2027-12-31', id:2, promocao: true},
    {nome: 'Curso de React', precoProduto: 40, validade: '2026-12-31', id:3},
  ];

  constructor() {
    for (let item of this.listaStrings) {
      console.log(item);
    }


    for (const item of this.listaNumeros) {
      console.log(item);
    }

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);

  }

}
