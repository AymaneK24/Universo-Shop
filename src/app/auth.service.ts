import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;
  email = 'aymanekenbouch@gmail.com';
  password = '123456';



  constructor() {}

  setToConnected() {
    this.isAuth = true;
  }

  setToDeconnected() {
    this.isAuth = false;
  }
  getToken(){

  }
}
