import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, AlertController }  from '@ionic/angular';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    public alertCtrl: AlertController
  ) { }

  async presentAlert(source, err) {
    const alert = await this.alertCtrl.create({
      header: "Alert",
      subHeader: "Problem with " + source,
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }


  login(authUser) {

    return new Promise((resolve, reject) => {

      const headers = new HttpHeaders();
      console.log("auth login")

      this.http.post(environment.BaseURL + "/api/auth/login", authUser, { headers } ).subscribe(
          (response: any) => {
            console.log("response: ", response)
            localStorage.setItem("userid", response[0].id);
            resolve(response)
            console.log("authService success")
            console.log(response.id)
          },
          (err) => {
            reject(err)
            console.log("authService failure")
          }
        )
    })
  }

  register(authUser) {
    
    return new Promise((resolve, reject) => {

      const headers = new HttpHeaders();
      console.log("auth register")
      console.log("authServiceUser: " + authUser)

      this.http.post(environment.BaseURL + "/api/auth/register", authUser
      , { headers } ).subscribe(
        (response: any) => {
          localStorage.setItem("userid", response.id);
          resolve(response);
        },
        (err) => {
          reject(err);
        }
      );

    });
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false'); // don't have jwt
    localStorage.setItem('jwt', ''); // do have jwt
  }

}