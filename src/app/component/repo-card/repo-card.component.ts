import {Component, Input, OnInit} from '@angular/core';
import {repoInterface} from "../../types/interfaces";

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {
  @Input() repoItem: repoInterface | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
