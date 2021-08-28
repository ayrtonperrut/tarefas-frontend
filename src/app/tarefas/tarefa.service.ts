import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MensagemService } from './mensagens/mensagem.service';
import { Tarefa } from './tarefa';

import { TAREFAS } from './tarefas-zoeira';

@Injectable({providedIn: 'root'})
export class TarefaService {

  constructor(private mensagemService: MensagemService) { }

  getTarefas(): Observable<Tarefa[]> {
    const tarefas = of(TAREFAS);
    this.mensagemService.add('TarefaService: fetched tarefas');
    
    return tarefas;
  }

  getTarefa(id: number): Observable<Tarefa> {
    const tarefa = TAREFAS.find(t => t.id === id)!;
    this.mensagemService.add(`TarefaService: fetched tarefa id=${id}`);

    return of(tarefa);
  }
}
