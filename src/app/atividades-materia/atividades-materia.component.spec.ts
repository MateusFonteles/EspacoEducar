import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesMateriaComponent } from './atividades-materia.component';

describe('AtividadesMateriaComponent', () => {
  let component: AtividadesMateriaComponent;
  let fixture: ComponentFixture<AtividadesMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
