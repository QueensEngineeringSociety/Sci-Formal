import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourLoggerComponent } from './hour-logger.component';

describe('HourLoggerComponent', () => {
  let component: HourLoggerComponent;
  let fixture: ComponentFixture<HourLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
