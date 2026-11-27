import { ChangeDetectorRef, Component } from '@angular/core';
import { Produtos } from '../../../services/produtos';
import { IProdutos } from '../../../model/IProduto.model';

@Component({
  selector: 'app-listar-produtos',
  standalone: false,
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css',
})
export class ListarProdutos {
  listaProdutos: IProdutos[] = []
 

  constructor(private produtosService:Produtos, private cd: ChangeDetectorRef) {
    this.carregarProdutos();
    
  }

  carregarProdutos():void{
    this.produtosService.buscarTodos().subscribe(retorno =>{ this.listaProdutos = retorno;
    this.cd.detectChanges();
    })
  }

  deletar(produto: IProdutos): void{
this.produtosService.excluir(produto.id!).subscribe(()=>{
this.produtosService.exibirMensagem(
  'SISTEMA',
`${produto.nome}foiexcluidocomsucesso!`,
'toast-error'
);
this.carregarProdutos();

});
  }
}
