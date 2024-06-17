import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUnCompletedComponent } from './task-un-completed.component';

describe('TaskUnCompletedComponent', () => {
  let component: TaskUnCompletedComponent;
  let fixture: ComponentFixture<TaskUnCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskUnCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskUnCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
