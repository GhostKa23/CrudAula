import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { IProdutos } from '../model/IProduto.model';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root',
})
export class Produtos {
  private URL: string = "http://localhost:3000/produtos";
 private http = inject(HttpClient)
 toastr = inject(ToastrService);

  buscarTodos(): Observable<IProdutos[]>{
    return this.http.get<IProdutos[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  buscarPorId(id:number): Observable<IProdutos[]>{
    return this.http.get<IProdutos[]>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

    cadastrar(produto: IProdutos): Observable<IProdutos>{
      return this.http.post<IProdutos[]>(this.URL,produto).pipe(
        map(retorno => retorno),
        catchError(erro=> this.exibirErro(erro))
      );

    }

    atualizar(produto: IProdutos): Observable<IProdutos>{
      return this.http.post<IProdutos[]>(`${this.URL}/${produto.id}`,produto).pipe(
        map(retorno => retorno),
        catchError(erro=> this.exibirErro(erro))
      );

    }

    excluir(produto: IProdutos): Observable<IProdutos>{
      return this.http.delete<any>(`${this.URL}/${produto.id}`,produto).pipe(
        map(retorno => retorno),
        catchError(erro=> this.exibirErro(erro))
      );

    }
  
  exibirErro(e:any):Observable<any>{
    this.exibirMensagem('Erro!!!', 'Não foi possivel realizar a operação', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo:string,mensagem:string,tipo:string) : void {
    this.toastr.show(mensagem,titulo,{closeButton:true, progressBar:true},tipo);

  }


}
