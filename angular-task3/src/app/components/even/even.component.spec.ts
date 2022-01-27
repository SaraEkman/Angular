import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenComponent } from './even.component';

describe('EvenComponent', () => {
  let component: EvenComponent;
  let fixture: ComponentFixture<EvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retun true if number is even', () => {
    let result = component.even(2)
    expect(result).toBeTrue();
  })
  it('should retun false if number is odd', () => {
    let result = component.even(3)
    expect(result).toBeFalse();
  })
  it('should testName', () => {
    expect(component.testName).toBe("Sara")
  })
});
