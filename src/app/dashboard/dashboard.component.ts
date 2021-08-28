import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefas/tarefa';
import { TarefaService } from '../tarefas/tarefa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.getTarefas();
  }

  getTarefas(): void {
    this.tarefaService.getTarefas()
      .subscribe(tarefas => this.tarefas = tarefas.slice(1, 5));
  }

}
