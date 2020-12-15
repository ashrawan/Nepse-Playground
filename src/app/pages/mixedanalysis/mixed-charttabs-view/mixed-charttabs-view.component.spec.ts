import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedCharttabsViewComponent } from './mixed-charttabs-view.component';

describe('MixedCharttabsViewComponent', () => {
  let component: MixedCharttabsViewComponent;
  let fixture: ComponentFixture<MixedCharttabsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedCharttabsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedCharttabsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
