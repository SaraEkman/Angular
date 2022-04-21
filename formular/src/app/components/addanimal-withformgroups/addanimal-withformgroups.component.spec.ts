import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddanimalWithformgroupsComponent } from './addanimal-withformgroups.component';

describe('AddanimalWithformgroupsComponent', () => {
  let component: AddanimalWithformgroupsComponent;
  let fixture: ComponentFixture<AddanimalWithformgroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddanimalWithformgroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddanimalWithformgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
