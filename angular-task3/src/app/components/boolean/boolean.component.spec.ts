import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanComponent } from './boolean.component';

describe('BooleanComponent', () => {
  let component: BooleanComponent;
  let fixture: ComponentFixture<BooleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooleanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should like is true', () => {
    expect(component.ettSpel.tyckaOm).toBeTrue()
    component.beFalse()
    expect(component.ettSpel.tyckaOm).toBeFalse()
    expect(component.entillSp.tyckaOm).toBeFalse()
  })
});
