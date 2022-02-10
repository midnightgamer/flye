import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api/api.service";
import {GlobalService} from "../../service/global/global.service";
import {ActivatedRoute} from "@angular/router";
import {repoInterface, userInterface} from "../../types/interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: userInterface | null = null;
  repo: Array<repoInterface> | null = null;
  userName = '';
  p: number = 1;

  constructor(private api: ApiService, public global: GlobalService, private router: ActivatedRoute) {

  }

  async ngOnInit(): Promise<void> {
    this.router.url.subscribe(async (url) => {
      this.p = 1;
      this.userName = url[1].path;
      this.user = await this.api.fetch_user(this.userName)
      this.repo = await this.api.fetch_user_repos(this.userName)
    });


  }

  async nextPage(event: any) {
    console.log(Math.round(event))
    this.p = Math.round(event);
    this.repo = await this.api.fetch_user_repos(this.userName, event)
  }

}
