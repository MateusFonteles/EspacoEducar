import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoVisualizarComponent } from './artigo-visualizar.component';

describe('ArtigoVisualizarComponent', () => {
  let component: ArtigoVisualizarComponent;
  let fixture: ComponentFixture<ArtigoVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
