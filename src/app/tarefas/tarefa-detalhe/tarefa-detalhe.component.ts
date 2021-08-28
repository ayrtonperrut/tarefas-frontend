import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa-detalhe',
  templateUrl: './tarefa-detalhe.component.html',
  styleUrls: ['./tarefa-detalhe.component.css']
})
export class TarefaDetalheComponent implements OnInit {

 tarefa: Tarefa | undefined;

  constructor(
    private route: ActivatedRoute,
    private tarefaService: TarefaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTarefa();
  }

  getTarefa(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tarefaService.getTarefa(id).subscribe(tarefa => this.tarefa = tarefa);
  }

  goBack(): void {
    this.location.back();
  }

}
