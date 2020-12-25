import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageTradingHistoryComponent } from './average-trading-history.component';

describe('AverageTradingHistoryComponent', () => {
  let component: AverageTradingHistoryComponent;
  let fixture: ComponentFixture<AverageTradingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageTradingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageTradingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
