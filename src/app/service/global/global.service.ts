import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  loader = {
    isLoading: false,
    set: (value: boolean) => {
      this.loader.isLoading = value;
    },
    get: () => {
      return this.loader.isLoading;
    }
  }

  constructor() {
  }
}
