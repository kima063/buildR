import { Component ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: ['h1 { font-weight: normal; }'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'buildr';

    }
