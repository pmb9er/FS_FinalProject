import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "../models/user.model";
import { NavController } from '@ionic/angular';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public user: User = new User();

  constructor(
    private http: HttpClient,
    private navCtrl: NavController
    ) {}

  getUsers(cb:Function) {
    this.http.get(environment.BaseURL + '/api/user')
    .subscribe((response) => {
      cb(null,response);
    },(err) => {
      cb(err,null);
    });
  }

  createUser(user: User, cb: Function) {
    this.http
    .post(environment.BaseURL + '/api/user', user)
    .subscribe((response) => {
      return cb(null, response);
    },
    (err) => {
      console.log(err);
      alert(err.error.message);
      return cb(err, null);
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.http
      .get(environment.BaseURL + '/api/user/')
      .subscribe(
        (response) => {
          resolve(response);
        },
        (err) => {
          console.log(err);
          reject(err.msg);
        }
      );
    });
  }

  getUserByID(userID) {
    return new Promise((resolve, reject) => {
      //const headers = new HttpHeaders();
      this.http.get(environment.BaseURL + '/api/user/' + userID)
      .subscribe(response => {
        resolve(response);
      },
      (err) => {
        reject(err);
      });
    });
  }

}
