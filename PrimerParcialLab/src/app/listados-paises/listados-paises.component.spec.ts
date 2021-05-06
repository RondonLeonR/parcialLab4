import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosPaisesComponent } from './listados-paises.component';

describe('ListadosPaisesComponent', () => {
  let component: ListadosPaisesComponent;
  let fixture: ComponentFixture<ListadosPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadosPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadosPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
