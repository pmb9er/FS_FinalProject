import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.BaseURL + '/api/user')
      .subscribe(
        (response: any) => {
          resolve(response)
          console.log("usersucceed: " + response)
        },
        (err) => {
          reject(err)
          console.log("userfail")
          console.log(err)
        }
      )
    })
  }
}
