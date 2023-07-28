import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGraphCardComponent } from './line-graph-card.component';

describe('LineGraphCardComponent', () => {
  let component: LineGraphCardComponent;
  let fixture: ComponentFixture<LineGraphCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineGraphCardComponent]
    });
    fixture = TestBed.createComponent(LineGraphCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
