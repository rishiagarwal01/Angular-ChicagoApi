import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor() { }

  wishList: Array<any> = [];

  addToWish(id: number) {
    this.wishList.push(id);
  }
  getList() {
     
  }
}
