import { Component, OnInit, Input } from '@angular/core';
import { Period } from '../model/period';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Database } from '../model/database';
import * as _ from 'lodash';
import { CourseApi } from '../model/courseApi';
import { TeacherApi } from '../model/teacherApi';

@Component({
  selector: 'br-routine-table',
  templateUrl: './routine-table.component.html',
  styleUrls: ['./routine-table.component.scss']
})
export class RoutineTableComponent implements OnInit {
  public allPeriods: Period[];
  public dayTimes = ['8:00', '9:15', '10:30', '11:45', '2:30', '3:45'];
  public largedayTimes = ['8:00', '10:30', '2:30'];
  public weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  public courses: CourseApi[] = [];
  public teachers: TeacherApi[] = [];
  @Input() isEditable: boolean;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadDatafromdb();
  }

  loadDatafromdb() {
    this.http.get<Period[]>('http://localhost:5000/api/period').subscribe(periods => {
      let allPeriods = periods;
      this.http.get<any[]>('http://103.82.172.91:5001/api/course').subscribe(courses => {
        this.courses = courses;
        this.http.get<any[]>('http://103.82.172.91:5001/api/facultymember').subscribe(faculty => {
          this.teachers = faculty;
          //this.setdata();
          this.allPeriods = allPeriods;
          //this.fillallperiods();
          this.spancalc();
        });
      });
    });
  }

  fillallperiods() {
    for (let i = 0; i < this.courses.length; i++) {
      let c = this.courses[i];
      let periodsWithCourseTeacher = _.filter<Period[]>(this.allPeriods, d => d.CourseId === c.c_id);
      for (let j = 0; j < periodsWithCourseTeacher.length; j++) {
        const p = periodsWithCourseTeacher[j];
        p.courseId = c.courseId;
      }
    }
    for (let i = 0; i < this.teachers.length; i++) {
      let t = this.teachers[i];
      let periodsWithCourseTeacher = _.filter<Period[]>(this.allPeriods, d => d.TeachersId === t.employeeId);
      for (let j = 0; j < periodsWithCourseTeacher.length; j++) {
        const q = periodsWithCourseTeacher[j];
        q.name = t.name;
      }
    }

  }

  spancalc() {
    for (let i = 0; i < this.allPeriods.length; i++) {
      const a = this.allPeriods[i];
      if (a.durationMinute <= 75) {
        a.span = 100 * a.durationMinute / 75;
      }
      if (a.durationMinute > 75) {
        a.span = 100 * a.durationMinute / 150;
      }
    }
  }

}
