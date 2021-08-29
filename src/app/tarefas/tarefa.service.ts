import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MensagemService } from './mensagens/mensagem.service';
import { Tarefa } from './tarefa';


@Injectable({providedIn: 'root'})
export class TarefaService {

  private tarefasUrl = 'api/tarefas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private mensagemService: MensagemService) { }

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.tarefasUrl)
    .pipe(
      tap(_ => this.log('fetched tarefas')),
      catchError(this.handleError<Tarefa[]>('getTarefas', []))
    );
  }

  getTarefaNo404<Data>(id: number): Observable<Tarefa> {
    const url = `${this.tarefasUrl}/?id=${id}`;

    return this.http.get<Tarefa[]>(url)
      .pipe(
        map(tarefas => tarefas[0]),
          tap(h => {
            const outcome = h ? `fetched` : `não encontrado`;
            this.log(`${outcome} tarefa id=${id}`);
          }),
          catchError(this.handleError<Tarefa>(`getTarefa id=${id}`))
          );        
  }

  getTarefa(id: number): Observable<Tarefa> {
    const url = `${this.tarefasUrl}/${id}`;
    this.mensagemService.add(`TarefaService: fetched tarefa id=${id}`);

    return this.http.get<Tarefa>(url).pipe(
      tap(_ => this.log(`fetched tarefa id=${id}`)),
      catchError(this.handleError<Tarefa>(`getTarefa id=${id}`))
    );
  }

  procurarTarefas(term: string): Observable<Tarefa[]> {
    if (!term.trim()) {
    
      return of([]);
    }
    return this.http.get<Tarefa[]>(`${this.tarefasUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found tarefas matching "${term}"`) :
         this.log(`no tarefas matching "${term}"`)),
      catchError(this.handleError<Tarefa[]>('procurarTarefas', []))
    );
  }

  addTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.tarefasUrl, tarefa, this.httpOptions).pipe(
      tap((novaTarefa: Tarefa) => this.log(`added tarefa w/ id=${novaTarefa.id}`)),
      catchError(this.handleError<Tarefa>('addTarefa'))
    );
  }

  deleteTarefa(id: number): Observable<Tarefa> {
    const url = `${this.tarefasUrl}/${id}`;

    return this.http.delete<Tarefa>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted tarefa id=${id}`)),
      catchError(this.handleError<Tarefa>('deleteTarefa'))
    );
  }

  updateTarefa(tarefa: Tarefa): Observable<any> {
    return this.http.put(this.tarefasUrl, tarefa, this.httpOptions).pipe(
      tap(_ => this.log(`updated tarefa id=${tarefa.id}`)),
      catchError(this.handleError<any>('updateTarefa'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(mensagem: string) {
    this.mensagemService.add(`tarefaService: ${mensagem}`);
  }
}
