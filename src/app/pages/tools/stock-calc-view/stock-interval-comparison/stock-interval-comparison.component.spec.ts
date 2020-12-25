import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockIntervalComparisonComponent } from './stock-interval-comparison.component';

describe('StockIntervalComparisonComponent', () => {
  let component: StockIntervalComparisonComponent;
  let fixture: ComponentFixture<StockIntervalComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockIntervalComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockIntervalComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
