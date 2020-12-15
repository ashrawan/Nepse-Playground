import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStockDiffComponent } from './all-stock-diff.component';

describe('AllStockDiffComponent', () => {
  let component: AllStockDiffComponent;
  let fixture: ComponentFixture<AllStockDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStockDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStockDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
