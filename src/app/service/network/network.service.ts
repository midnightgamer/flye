import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalService} from "../global/global.service";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient, private global: GlobalService) {
  }

  get_api(url: string, headers?: any): Promise<any> {
    this.global.loader.set(true);
    return new Promise((resolve, reject) => {
      this.http
        .get(url, {headers: headers}).subscribe(
        async (data: any) => {
          this.global.loader.set(false);
          resolve(data);
        },
        async (err) => {
          this.global.loader.set(false);
          reject(err);
        }
      );
    });
  }
}
