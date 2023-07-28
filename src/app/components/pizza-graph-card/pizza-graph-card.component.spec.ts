import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaGraphCardComponent } from './pizza-graph-card.component';

describe('PizzaGraphCardComponent', () => {
  let component: PizzaGraphCardComponent;
  let fixture: ComponentFixture<PizzaGraphCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaGraphCardComponent]
    });
    fixture = TestBed.createComponent(PizzaGraphCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
