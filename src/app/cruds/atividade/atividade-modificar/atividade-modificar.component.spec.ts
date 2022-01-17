import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeModificarComponent } from './atividade-modificar.component';

describe('AtividadeModificarComponent', () => {
  let component: AtividadeModificarComponent;
  let fixture: ComponentFixture<AtividadeModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadeModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
