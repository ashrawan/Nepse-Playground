import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodataInfoStatusComponent } from './nodata-info-status.component';

describe('NodataInfoStatusComponent', () => {
  let component: NodataInfoStatusComponent;
  let fixture: ComponentFixture<NodataInfoStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodataInfoStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodataInfoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
