import { Component, OnInit } from '@angular/core';
import { MensagemService } from './mensagens/mensagem.service';

import { Tarefa } from './tarefa';
import { TarefaService } from './tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.getTarefas();
  }
 
  getTarefas(): void {
    this.tarefaService.getTarefas().subscribe(tarefas => this.tarefas = tarefas);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.tarefaService.addTarefa({ name } as Tarefa)
      .subscribe(hero => {
        this.tarefas.push(hero);
      });
  }

  delete(tarefa: Tarefa): void {
    this.tarefas = this.tarefas.filter(h => h !== tarefa);
    this.tarefaService.deleteTarefa(tarefa.id).subscribe();
  }

}
