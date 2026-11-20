import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProdutos } from '../components/model/IProduto.model';

@Injectable({
  providedIn: 'root',
})
export class Produtos {
  private URL: string = "http://localhost:3000";
 private http = inject(HttpClient)

  buscarTodos(): Observable<IProdutos[]>{
    return this.http.get<IProdutos[]>(this.URL);
  }

  
}
