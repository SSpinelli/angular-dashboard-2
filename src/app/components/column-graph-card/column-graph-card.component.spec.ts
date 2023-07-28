import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnGraphCardComponent } from './column-graph-card.component';

describe('ColumnGraphCardComponent', () => {
  let component: ColumnGraphCardComponent;
  let fixture: ComponentFixture<ColumnGraphCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnGraphCardComponent]
    });
    fixture = TestBed.createComponent(ColumnGraphCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
