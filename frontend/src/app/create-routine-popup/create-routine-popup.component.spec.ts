import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoutinePopupComponent } from './create-routine-popup.component';

describe('CreateRoutinePopupComponent', () => {
  let component: CreateRoutinePopupComponent;
  let fixture: ComponentFixture<CreateRoutinePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoutinePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoutinePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
