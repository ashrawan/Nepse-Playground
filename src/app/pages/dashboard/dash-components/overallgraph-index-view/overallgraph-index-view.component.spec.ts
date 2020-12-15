import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallgraphIndexViewComponent } from './overallgraph-index-view.component';

describe('OverallgraphIndexViewComponent', () => {
  let component: OverallgraphIndexViewComponent;
  let fixture: ComponentFixture<OverallgraphIndexViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallgraphIndexViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallgraphIndexViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
