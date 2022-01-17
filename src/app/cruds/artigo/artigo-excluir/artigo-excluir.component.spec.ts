import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoExcluirComponent } from './artigo-excluir.component';

describe('ArtigoExcluirComponent', () => {
  let component: ArtigoExcluirComponent;
  let fixture: ComponentFixture<ArtigoExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
