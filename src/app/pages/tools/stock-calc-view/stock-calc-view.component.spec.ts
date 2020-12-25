import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCalcViewComponent } from './stock-calc-view.component';

describe('StockCalcViewComponent', () => {
  let component: StockCalcViewComponent;
  let fixture: ComponentFixture<StockCalcViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCalcViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCalcViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
