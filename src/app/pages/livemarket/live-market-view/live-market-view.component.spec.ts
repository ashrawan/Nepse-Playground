import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveMarketViewComponent } from './live-market-view.component';

describe('LiveMarketViewComponent', () => {
  let component: LiveMarketViewComponent;
  let fixture: ComponentFixture<LiveMarketViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveMarketViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveMarketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
