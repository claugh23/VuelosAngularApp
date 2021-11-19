import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlainesComponent } from './airlaines.component';

describe('AirlainesComponent', () => {
  let component: AirlainesComponent;
  let fixture: ComponentFixture<AirlainesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlainesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlainesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
