import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoModificarComponent } from './artigo-modificar.component';

describe('ArtigoModificarComponent', () => {
  let component: ArtigoModificarComponent;
  let fixture: ComponentFixture<ArtigoModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
