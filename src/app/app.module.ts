import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { TarefaDetalheComponent } from './tarefas/tarefa-detalhe/tarefa-detalhe.component';
import { MensagensComponent } from './tarefas/mensagens/mensagens.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    TarefaDetalheComponent,
    MensagensComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
