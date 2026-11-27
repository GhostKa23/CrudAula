import { Component, inject } from '@angular/core';
import { IProdutos } from '../../../model/IProduto.model';
import { Produtos } from '../../../services/produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  standalone: false,
  templateUrl: './cadastrar-produto.html',
  styleUrl: './cadastrar-produto.css',
})
export class CadastrarProduto {
  private produtosService = inject(Produtos);
  private router = inject(Router);
  produto: IProdutos = {
    nome:'',
    validade: new Date(),
    precoProduto: 0
  };

  salvarProduto(): void { 
   this.produtosService.cadastrar(this.produto).subscribe(retorno =>{
    this.produto = retorno;
    this.produtosService.exibirMensagem(
      'Sistema',
      `${this.produto.nome} foi cadastrado com sucesso. ID ${this.produto.id}`,
      'toast-success'
    );
    this.router.navigate(['/produtos']);
   });

  }

}
