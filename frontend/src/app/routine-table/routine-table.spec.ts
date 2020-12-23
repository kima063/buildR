import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineTableComponent } from './routine-table.component';
import { RoutineCellComponent } from '../routine-cell/routine-cell.component';

fdescribe('RoutineTableComponent', () => {
  let component: RoutineTableComponent;
  let fixture: ComponentFixture<RoutineTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RoutineTableComponent,
        RoutineCellComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineTableComponent);
    component = fixture.componentInstance;
    component.allPeriods  = [
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'cse 4421', TeacherIds: ['ab', 'cd'], roomId: 302, dayOfWeek: 'Monday', TimeOfDay: '8:00', Course: {Name: 'vfgs', isLab: true}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'swe 4422', TeacherIds: ['ef'], roomId: 303, dayOfWeek: 'Monday', TimeOfDay: '8:00', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'cse 4423', TeacherIds: ['gh', 'ij'], roomId: 302, dayOfWeek: 'Monday', TimeOfDay: '8:00', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'hum 4424', TeacherIds: ['kl', 'mn'], roomId: 302, dayOfWeek: 'Monday', TimeOfDay: '11:45', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'math 4425', TeacherIds: ['op'], roomId: 302, dayOfWeek: 'Monday', TimeOfDay: '2:30', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'swe 4426', TeacherIds: ['qr', 'st'], roomId: 302, dayOfWeek: 'Monday', TimeOfDay: '3:45', Course: {Name: 'vfgs', isLab: false}},

      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'cse 4421', TeacherIds: ['ab', 'cd'], roomId: 302, dayOfWeek: 'Tuesday', TimeOfDay: '8:00', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'swe 4422', TeacherIds: ['ef'], roomId: 303, dayOfWeek: 'Tuesday', TimeOfDay: '9:15', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'cse 4423', TeacherIds: ['gh', 'ij'], roomId: 302, dayOfWeek: 'Tuesday', TimeOfDay: '9:15', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'hum 4424', TeacherIds: ['kl', 'mn'], roomId: 302, dayOfWeek: 'Tuesday', TimeOfDay: '9:15', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'math 4425', TeacherIds: ['op'], roomId: 302, dayOfWeek: 'Tuesday', TimeOfDay: '2:30', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'swe 4426', TeacherIds: ['qr', 'st'], roomId: 302, dayOfWeek: 'Tuesday', TimeOfDay: '2:30', Course: {Name: 'vfgs', isLab: false}},

      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'cse 4421', TeacherIds: ['ab', 'cd'], roomId: 302, dayOfWeek: 'Wednesday', TimeOfDay: '8:00', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'swe 4422', TeacherIds: ['ef'], roomId: 303, dayOfWeek: 'Wednesday', TimeOfDay: '9:15', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'cse 4423', TeacherIds: ['gh', 'ij'], roomId: 302, dayOfWeek: 'Wednesday', TimeOfDay: '10:30', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'hum 4424', TeacherIds: ['kl', 'mn'], roomId: 302, dayOfWeek: 'Wednesday', TimeOfDay: '11:45', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'math 4425', TeacherIds: ['op'], roomId: 302, dayOfWeek: 'Wednesday', TimeOfDay: '11:45', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'swe 4426', TeacherIds: ['qr', 'st'], roomId: 302, dayOfWeek: 'Wednesday', TimeOfDay: '3:45', Course: {Name: 'vfgs', isLab: false}},

      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'cse 4421', TeacherIds: ['ab', 'cd'], roomId: 302, dayOfWeek: 'Thursday', TimeOfDay: '8:00', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'swe 4422', TeacherIds: ['ef'], roomId: 303, dayOfWeek: 'Thursday', TimeOfDay: '9:15', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'cse 4423', TeacherIds: ['gh', 'ij'], roomId: 302, dayOfWeek: 'Thursday', TimeOfDay: '10:30', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'hum 4424', TeacherIds: ['kl', 'mn'], roomId: 302, dayOfWeek: 'Thursday', TimeOfDay: '11:45', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'math 4425', TeacherIds: ['op'], roomId: 302, dayOfWeek: 'Thursday', TimeOfDay: '2:30', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'swe 4426', TeacherIds: ['qr', 'st'], roomId: 302, dayOfWeek: 'Thursday', TimeOfDay: '3:45', Course: {Name: 'vfgs', isLab: false}},

      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'cse 4421', TeacherIds: ['ab', 'cd'], roomId: 302, dayOfWeek: 'Friday', TimeOfDay: '8:00', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'swe 4422', TeacherIds: ['ef'], roomId: 303, dayOfWeek: 'Friday', TimeOfDay: '9:15', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'cse 4423', TeacherIds: ['gh', 'ij'], roomId: 302, dayOfWeek: 'Friday', TimeOfDay: '10:30',Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'hum 4424', TeacherIds: ['kl', 'mn'], roomId: 302, dayOfWeek: 'Friday', TimeOfDay: '11:45', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'math 4425', TeacherIds: ['op'], roomId: 302, dayOfWeek: 'Friday', TimeOfDay: '2:30', Course: {Name: 'vfgs', isLab: false}},
      // tslint:disable-next-line: max-line-length
      {StudentGroupId: 'SWE A', cid: 'swe 4426', TeacherIds: ['qr', 'st'], roomId: 302, dayOfWeek: 'Friday', TimeOfDay: '3:45', Course: {Name: 'vfgs', isLab: false}},

    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
