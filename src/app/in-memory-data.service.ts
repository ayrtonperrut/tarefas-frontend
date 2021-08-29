import { Injectable } from '@angular/core';
import { Tarefa } from './tarefas/tarefa';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
createDb() {
  const tarefas = [
    { id: 10, name: 'Lavar o cachorro' },
    { id: 11, name: 'Lavar a louça'},
    { id: 12, name: 'Arrumar a casa'},
    { id: 13, name: 'Varrer a varanda'}
  ];

  return {tarefas}
}

genId(tarefas: Tarefa[]): number {
  
  return tarefas.length > 0 ? Math.max(...tarefas.map(tarefa => tarefa.id)) + 1 : 11;
}
 
}
