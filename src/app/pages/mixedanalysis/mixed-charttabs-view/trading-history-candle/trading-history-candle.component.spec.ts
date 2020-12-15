import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingHistoryCandleComponent } from './trading-history-candle.component';

describe('TradingHistoryCandleComponent', () => {
  let component: TradingHistoryCandleComponent;
  let fixture: ComponentFixture<TradingHistoryCandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingHistoryCandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingHistoryCandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
