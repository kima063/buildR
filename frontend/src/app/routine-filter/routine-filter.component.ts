import { Component, OnInit, Input, Output } from '@angular/core';
import { Period } from '../model/period';
import { browser } from 'protractor';
import { filter } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { TeacherApi } from '../model/teacherApi';

@Component({
  selector: 'br-routine-filter',
  templateUrl: './routine-filter.component.html',
  styleUrls: ['./routine-filter.component.scss']
})


export class RoutineFilterComponent implements OnInit {
  department: string[] = ['CSE', 'EEE', 'MCE', 'CEE', 'BTM'];
  facultyMembers: TeacherApi[];
  rooms: any[];

  selectedteacher = '';
  selectname(event: any) {
    this.selectedteacher = event.target.value;
  }


  selectedroom : string = '';
  selectroom(event: any) {
    this.selectedroom = event.target.value;
  }

  selecteddept : string = '';
  selectdept(event: any) {
    this.selecteddept = event.target.value;
  }

  selectedstudentgroup : string = '';
  selectgroup(event: any) {
    this.selectedroom = event.target.value;
  }


  @Input() allPeriods: Period[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://103.82.172.91:5001/api/facultymember').subscribe(facultyMembers => this.facultyMembers = facultyMembers);
    this.http.get<any[]>('http://103.82.172.91:5001/api/room').subscribe(rooms => this.rooms = rooms);
  }
}

