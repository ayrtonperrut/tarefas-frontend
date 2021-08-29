import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa-procurar',
  templateUrl: './tarefa-procurar.component.html',
  styleUrls: ['./tarefa-procurar.component.css']
})
export class TarefaProcurarComponent implements OnInit {

  tarefas$!: Observable<Tarefa[]>;
  private searchTerms = new Subject<string>();

  constructor(private tarefaService: TarefaService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.tarefas$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.tarefaService.procurarTarefas(term)),
    );
  }

}
