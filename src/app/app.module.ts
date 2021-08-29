import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { TarefaDetalheComponent } from './tarefas/tarefa-detalhe/tarefa-detalhe.component';
import { MensagensComponent } from './tarefas/mensagens/mensagens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { TarefaProcurarComponent } from './tarefas/tarefa-procurar/tarefa-procurar.component';
import { TarefaService } from './tarefas/tarefa.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    TarefaDetalheComponent,
    MensagensComponent,
    DashboardComponent,
    TarefaProcurarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
