import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TodoComponent } from './todo.component'

describe('TodoComponent', () => {
  let component: TodoComponent
  let fixture: ComponentFixture<TodoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should toggle thr todo', () => {
    //Förbereda
    expect(component.shop.done).toBeFalse()
    //Agera
    component.toggle()
    //Verifera
    expect(component.shop.done).toBeTrue()
  })
  it('should toggle mang times', () => {
    expect(component.shop.done).toBeFalse()
    //Agera
    component.toggle()
    //Verifera
    expect(component.shop.done).toBeTrue()

    component.toggle()
    expect(component.shop.done).toBeFalse()
  })
})
