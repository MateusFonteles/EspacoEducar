import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoCrudComponent } from './artigo-crud.component';

describe('ArtigoCrudComponent', () => {
  let component: ArtigoCrudComponent;
  let fixture: ComponentFixture<ArtigoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
