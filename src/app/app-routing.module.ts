import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TarefaDetalheComponent } from './tarefas/tarefa-detalhe/tarefa-detalhe.component';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'datalhe/:id', component: TarefaDetalheComponent },
  { path: 'tarefas', component: TarefasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
