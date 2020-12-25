import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationViewComponent } from './calculation-view.component';

describe('CalculationViewComponent', () => {
  let component: CalculationViewComponent;
  let fixture: ComponentFixture<CalculationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
