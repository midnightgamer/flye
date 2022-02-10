import {Injectable} from '@angular/core';
import {NetworkService} from "../network/network.service";
import {HttpHeaders} from "@angular/common/http";
import {repoInterface, userInterface} from "../../types/interfaces";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private network: NetworkService) {
  }

  async fetch_user(username: string): Promise<userInterface | null> {
    try {
      return await this.network.get_api(`https://api.github.com/users/${username}`);

    } catch (e) {
      return null;
    }
  }

  async fetch_user_repos(username: string, page = 1): Promise<Array<repoInterface>> {
    let headers = new HttpHeaders();
    headers = headers.set('accept', 'application/vnd.github.v3+json');
    return await this.network.get_api(`https://api.github.com/users/${username}/repos?per_page=10&page=${page}&sort=created`, headers);
  }
}
