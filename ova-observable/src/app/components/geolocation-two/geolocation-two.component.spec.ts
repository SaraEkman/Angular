import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationTwoComponent } from './geolocation-two.component';

describe('GeolocationTwoComponent', () => {
  let component: GeolocationTwoComponent;
  let fixture: ComponentFixture<GeolocationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeolocationTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
