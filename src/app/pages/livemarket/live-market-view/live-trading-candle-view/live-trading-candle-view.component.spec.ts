import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTradingCandleViewComponent } from './live-trading-candle-view.component';

describe('LiveTradingCandleViewComponent', () => {
  let component: LiveTradingCandleViewComponent;
  let fixture: ComponentFixture<LiveTradingCandleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTradingCandleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTradingCandleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
