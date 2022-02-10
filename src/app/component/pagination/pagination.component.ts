import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {userInterface} from "../../types/interfaces";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() user: userInterface | undefined;
  @Input() p: number | undefined;
  @Output() childEvent = new EventEmitter();
  math = Math;

  constructor() {
  }
  nextPage(val:any){
    this.childEvent.emit(val)
  }

  ngOnInit(): void {
  }


}
