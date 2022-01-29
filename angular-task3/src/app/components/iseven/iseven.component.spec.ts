import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsevenComponent } from './iseven.component';

describe('IsevenComponent', () => {
  let component: IsevenComponent;
  let fixture: ComponentFixture<IsevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
      it('should retun true if number is even', () => {
    let result = component.iseven(2)
    expect(result).toBeTrue();
  })
  it('should retun false if number is odd', () => {
    let result = component.iseven(3)
    expect(result).toBeFalse();
  })
  it('should testName', () => {
    expect(component.testName).toBe("Sara")
  })
});
