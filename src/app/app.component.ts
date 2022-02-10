import {ChangeDetectorRef, Component} from '@angular/core';
import {GlobalService} from "./service/global/global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flye';

  constructor(public global: GlobalService, private cdr: ChangeDetectorRef) {
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
}
