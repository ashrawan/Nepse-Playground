import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallgraphIndexComparisonComponent } from './overallgraph-index-comparison.component';

describe('OverallgraphIndexComparisonComponent', () => {
  let component: OverallgraphIndexComparisonComponent;
  let fixture: ComponentFixture<OverallgraphIndexComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallgraphIndexComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallgraphIndexComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
