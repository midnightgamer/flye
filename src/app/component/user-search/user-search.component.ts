import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  input = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToUserPage() {
    this.router.navigate([`user/${this.input}`])
    this.input = '';
  }

}
