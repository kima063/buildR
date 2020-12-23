import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineCellComponent } from './routine-cell.component';

describe('RoutineCellComponent', () => {
  let component: RoutineCellComponent;
  let fixture: ComponentFixture<RoutineCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineCellComponent);
    component = fixture.componentInstance;

/*highest duration=150 min*/


    component.allPeriods  = [
      {StudentGroupId: 'SWE A', cid: 'cse 4421', TeacherIds: ['ab', 'cd'], roomId: 302, dayOfWeek: 'Monday',
       TimeOfDay: '8:00', Course: {Name: 'Structured Programming', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'swe 4422', TeacherIds: ['ef'], roomId: 303, dayOfWeek: 'Monday',
       TimeOfDay: '8:00', Course: {Name: 'OOP II', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'cse 4423', TeacherIds: ['gh', 'ij'], roomId: 302, dayOfWeek: 'Monday',
       TimeOfDay: '8:00', Course: {Name: 'Data Structure', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'hum 4424', TeacherIds: ['kl', 'mn'], roomId: 302, dayOfWeek: 'Monday',
       TimeOfDay: '11:45', Course: {Name: 'Arabic Language', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'math 4425', TeacherIds: ['op'], roomId: 302, dayOfWeek: 'Monday',
       TimeOfDay: '2:30', Course: {Name: 'Linear Algebra', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'swe 4426', TeacherIds: ['qr', 'st'], roomId: 302, dayOfWeek: 'Monday',
       TimeOfDay: '3:45', Course: {Name: 'Intro. to Software Engineering', isLab: false, d: 75} },

      {StudentGroupId: 'SWE A', cid: 'cse 4421', TeacherIds: ['ab', 'cd'], roomId: 302, dayOfWeek: 'Tuesday',
       TimeOfDay: '8:00', Course: {Name: 'Structured Programming', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'swe 4422', TeacherIds: ['ef'], roomId: 303, dayOfWeek: 'Tuesday',
       TimeOfDay: '9:15', Course: {Name: 'OOP II', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'cse 4423', TeacherIds: ['gh', 'ij'], roomId: 302, dayOfWeek: 'Tuesday',
       TimeOfDay: '9:15', Course: {Name: 'Data Structure', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'hum 4424', TeacherIds: ['kl', 'mn'], roomId: 302, dayOfWeek: 'Tuesday',
       TimeOfDay: '9:15', Course: {Name: 'Arabic Language', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'math 4425', TeacherIds: ['op'], roomId: 302, dayOfWeek: 'Tuesday',
       TimeOfDay: '2:30', Course: {Name: 'Linear Algebra', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'swe 4426', TeacherIds: ['qr', 'st'], roomId: 302, dayOfWeek: 'Tuesday',
       TimeOfDay: '2:30', Course: {Name: 'Intro. to Software Engineering', isLab: false, d: 75} },

      {StudentGroupId: 'SWE A', cid: 'cse 4421', TeacherIds: ['ab', 'cd'], roomId: 302, dayOfWeek: 'Wednesday',
       TimeOfDay: '8:00', Course: {Name: 'Structured Programming', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'swe 4422', TeacherIds: ['ef'], roomId: 303, dayOfWeek: 'Wednesday',
       TimeOfDay: '9:15', Course: {Name: 'OOP II', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'cse 4423', TeacherIds: ['gh', 'ij'], roomId: 302, dayOfWeek: 'Wednesday',
       TimeOfDay: '10:30', Course: {Name: 'Data Structure', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'hum 4424', TeacherIds: ['kl', 'mn'], roomId: 302, dayOfWeek: 'Wednesday',
       TimeOfDay: '11:45', Course: {Name: 'Arabic Language', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'math 4425', TeacherIds: ['op'], roomId: 302, dayOfWeek: 'Wednesday',
       TimeOfDay: '11:45', Course: {Name: 'Linear Algebra', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'swe 4426', TeacherIds: ['qr', 'st'], roomId: 302, dayOfWeek: 'Wednesday',
       TimeOfDay: '3:45', Course: {Name: 'Intro. to Software Engineering', isLab: false, d: 75} },

      {StudentGroupId: 'SWE A', cid: 'cse 4421', TeacherIds: ['ab', 'cd'], roomId: 302, dayOfWeek: 'Thursday',
       TimeOfDay: '8:00', Course: {Name: 'Structured Programming', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'swe 4422', TeacherIds: ['ef'], roomId: 303, dayOfWeek: 'Thursday',
       TimeOfDay: '9:15', Course: {Name: 'OOP II', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'cse 4423', TeacherIds: ['gh', 'ij'], roomId: 302, dayOfWeek: 'Thursday',
       TimeOfDay: '10:30', Course: {Name: 'Data Structure', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'hum 4424', TeacherIds: ['kl', 'mn'], roomId: 302, dayOfWeek: 'Thursday',
       TimeOfDay: '11:45', Course: {Name: 'Arabic Language', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'math 4425', TeacherIds: ['op'], roomId: 302, dayOfWeek: 'Thursday',
       TimeOfDay: '2:30', Course: {Name: 'Linear Algebra', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'swe 4426', TeacherIds: ['qr', 'st'], roomId: 302, dayOfWeek: 'Thursday',
       TimeOfDay: '3:45', Course: {Name: 'Intro. to Software Engineering', isLab: false, d: 75} },

      {StudentGroupId: 'SWE A', cid: 'cse 4421', TeacherIds: ['ab', 'cd'], roomId: 302, dayOfWeek: 'Friday',
       TimeOfDay: '8:00', Course: {Name: 'Structured Programming', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'swe 4422', TeacherIds: ['ef'], roomId: 303, dayOfWeek: 'Friday',
       TimeOfDay: '9:15', Course: {Name: 'OOP II', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'cse 4423', TeacherIds: ['gh', 'ij'], roomId: 302, dayOfWeek: 'Friday',
       TimeOfDay: '10:30', Course: {Name: 'Data Structure', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'hum 4424', TeacherIds: ['kl', 'mn'], roomId: 302, dayOfWeek: 'Friday',
       TimeOfDay: '11:45', Course: {Name: 'Arabic Language', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'math 4425', TeacherIds: ['op'], roomId: 302, dayOfWeek: 'Friday',
       TimeOfDay: '2:30', Course: {Name: 'Linear Algebra', isLab: false, d: 75} },
      {StudentGroupId: 'SWE A', cid: 'swe 4426', TeacherIds: ['qr', 'st'], roomId: 302, dayOfWeek: 'Friday',
       TimeOfDay: '3:45', Course: {Name: 'Intro. to Software Engineering', isLab: false, d: 75} }
    ];

    component.dayOfWeek = 'Monday';
    component.timeOfDay = '8:00';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
