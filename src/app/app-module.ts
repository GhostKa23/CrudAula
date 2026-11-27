// PIPES: https://angular.io/guide/pipes

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
registerLocaleData(localePt);

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './template/header/header';
import { Footer } from './template/footer/footer';
import { Home } from './components/home/home';
import { ListarProdutos } from './components/produtos/listar-produtos/listar-produtos';
import { CadastrarProduto } from './components/produtos/cadastrar-produto/cadastrar-produto';
import { FormsModule } from '@angular/forms';
import { AtualizarProduto } from './components/produtos/atualizar-produto/atualizar-produto';
import { provideSweetAlert2, SwalComponent, SwalDirective } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    ListarProdutos,
    CadastrarProduto,
    AtualizarProduto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwalComponent,
    SwalDirective
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideHttpClient(),
     provideToastr(),
     provideSweetAlert2({
// Optionalconfiguration
fireOnInit: false,
dismissOnDestroy: true,
}),
  ],
  bootstrap: [App]
})
export class AppModule { }
