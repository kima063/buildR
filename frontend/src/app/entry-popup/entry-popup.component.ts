import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Period } from '../model/period';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Database } from '../model/database';

@Component({
  selector: 'br-entry-popup',
  templateUrl: './entry-popup.component.html',
  styleUrls: ['./entry-popup.component.scss']
})
export class EntryPopupComponent implements OnInit {
  semester: number[] = [1, 2, 3, 4];
  department: string[] = ['CSE', 'EEE', 'MCE', 'CEE', 'BTM'];
  courses: string[];
  teachers: string[];
  rooms: number[];

  model: any = {};
  closeResult: string;
  @Input() public allPeriods: Period[];
  @Input() public dayOfWeek: any;
  @Input() public timeOfDay: any;
  @Input() public duration: any;
  @Output() public onSuccess = new EventEmitter<void>();
  @Output() public periodid = new EventEmitter<number>();
  public db: Database[] = [];
  public recordwithpid: Database;


  constructor(private modalService: NgbModal, private http: HttpClient) { }

  open(content: any) {
    this.http.get<any[]>('http://103.82.172.91:5001/api/course').subscribe(courses => this.courses = courses);
    this.http.get<any[]>('http://103.82.172.91:5001/api/facultymember').subscribe(teachers => this.teachers = teachers);
    this.http.get<any[]>('http://103.82.172.91:5001/api/room').subscribe(rooms => this.rooms = rooms);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
      // period : Period [];
      let db = new Database();
      db.dayOfWeek = this.dayOfWeek;
      db.startTime = this.timeOfDay;
      db.course_Id = this.model.course;
      db.roomId = this.model.room;
      db.section = this.model.sec;
      db.t_name = this.model.teacher;
      db.department = this.model.dept;
      db.durationMinute = this.model.duration;
      db.semester = this.model.sem;
      db.c_Id = null;
      db.teachersId = null;

      // this.allPeriods.push(period);
      this.onSuccess.emit();
     // this.closeResult = this.model.course;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.addperiod();

  }

  addperiod() {
    this.http.post<Period>('http://localhost/api/period', this.db).subscribe(p => {
      //this.recordwithpid = p;
      this.periodid.emit( this.recordwithpid.periodId);
    });
  }



  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.http.get<any[]>('http://103.82.172.91:5001/api/course').subscribe(courses => this.courses = courses);
    this.http.get<any[]>('http://103.82.172.91:5001/api/facultymember').subscribe(teachers => this.teachers = teachers);
    this.http.get<any[]>('http://103.82.172.91:5001/api/room').subscribe(rooms => this.rooms = rooms);
  }

}
