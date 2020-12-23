import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Period } from '../model/period';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Database } from '../model/database';

@Component({
  selector: 'br-routine-cell',
  templateUrl: './routine-cell.component.html',
  styleUrls: ['./routine-cell.component.scss']
})

@Injectable()
export class RoutineCellComponent implements OnInit {
  private headers: HttpHeaders;


  @Input() public isEditable: boolean;

  @Input() public allPeriods: Period[];
  @Input() public timeOfDay: string
  @Input() public dayOfWeek: string;
  @Input() public isDoubleCell: boolean;

  public periodid: number;
  public rec: Database[];
  public collision: boolean;


  periods: Period[];

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  ngOnInit() {
    this.entryInPeriods();
  }

  entryInPeriods() {

    this.periods = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.allPeriods.length; i++) {
      const period = this.allPeriods[i];

      if (period.dayOfWeek === this.dayOfWeek && period.startTime === this.timeOfDay && period.durationMinute > 75
        && this.isDoubleCell === true) {
        this.periods.push(period);
      } else if (period.dayOfWeek === this.dayOfWeek && period.startTime === this.timeOfDay && period.durationMinute <= 75 &&
        this.isDoubleCell === false) {
        this.periods.push(period);
      }
    }

  }


  collisionDetection(period:Period) {
    this.periodid = period.periodId;
    this.http.get<Database[]>('http://localhost:5000/api/period').subscribe(rec => this.rec = rec);
    for (let i = 0; i < this.rec.length; i++) {
      const rec1 = this.rec[i];
      if (rec1.periodId === this.periodid) {
        const room = rec1.roomId;
        const day = rec1.dayOfWeek;
        const time = rec1.startTime;
        const teachers = rec1.t_name;
        for (let j = 0; j < this.rec.length; j++) {
          const rec2 = this.rec[j];
          if (rec2.startTime === time && rec2.dayOfWeek === day && rec2.roomId === room) {
            this.collision = true;
            break;
          } else {this.collision = false; }

          if (rec2.startTime === time && rec2.dayOfWeek === day && rec2.t_name === name) {
            this.collision = true;
            break;
          } else {this.collision = false; }

        }
      } else { break; }
    }
  }

  delOnClick(period: Period) {

    this.http.delete<Database>('http://localhost:5000/api/period' + period).subscribe(response => {
    });
  }
  editOnClick(event: Event) {
    this.http.put<any>('http://localhost:5000/api/period', {}).subscribe(response => {
      console.log(response);
    });
  }
}
