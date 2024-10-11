import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIncompletedComponent } from './todo-incompleted.component';

describe('TodoIncompletedComponent', () => {
  let component: TodoIncompletedComponent;
  let fixture: ComponentFixture<TodoIncompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoIncompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoIncompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
