import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoutinePopupComponent } from './edit-routine-popup.component';

describe('EditRoutinePopupComponent', () => {
  let component: EditRoutinePopupComponent;
  let fixture: ComponentFixture<EditRoutinePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRoutinePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoutinePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
