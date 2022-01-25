import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrainfoComponent } from './extrainfo.component';

describe('ExtrainfoComponent', () => {
  let component: ExtrainfoComponent;
  let fixture: ComponentFixture<ExtrainfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrainfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
