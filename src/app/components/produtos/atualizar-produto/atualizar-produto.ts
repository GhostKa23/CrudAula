import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Produtos } from '../../../services/produtos';
import { ActivatedRoute, Router } from '@angular/router';
import { IProdutos } from '../../../model/IProduto.model';

@Component({
  selector: 'app-atualizar-produto',
  standalone: false,
  templateUrl: './atualizar-produto.html',
  styleUrl: './atualizar-produto.css',
})
export class AtualizarProduto {
  
   produto: IProdutos = {
    nome:'',
    validade: new Date(),
    precoProduto: 0
  };

private produtosService = inject(Produtos);
  private router = inject(Router);
  private cd = inject(ChangeDetectorRef);
  activatedRouter = inject(ActivatedRoute);
 

  ngOninit():void{
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.produtosService.buscarPorId(id).subscribe(retorno => {
    this.produto = retorno;
    this.cd.detectChanges();
});

  }
 

  salvarProduto(): void { 
   this.produtosService.atualizar(this.produto).subscribe(retorno =>{
    this.produto = retorno;
    this.produtosService.exibirMensagem(
      'Sistema',
      `${this.produto.nome} foi atualizado com sucesso. ID ${this.produto.id}`,
      'toast-success'
    );
    this.router.navigate(['/produtos']);
   });

  }
}


