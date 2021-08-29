import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaProcurarComponent } from './tarefa-procurar.component';

describe('TarefaProcurarComponent', () => {
  let component: TarefaProcurarComponent;
  let fixture: ComponentFixture<TarefaProcurarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaProcurarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaProcurarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
