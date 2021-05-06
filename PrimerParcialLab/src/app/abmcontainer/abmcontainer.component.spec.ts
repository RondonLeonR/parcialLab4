import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMcontainerComponent } from './abmcontainer.component';

describe('ABMcontainerComponent', () => {
  let component: ABMcontainerComponent;
  let fixture: ComponentFixture<ABMcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABMcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
