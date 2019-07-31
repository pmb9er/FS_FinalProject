import { Component, OnInit } from '@angular/core';
import { NavController, AlertController }  from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public authUser = new User();

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  register() {
    console.log(this.authUser)
    this.authService.register(this.authUser).then(res => {
      this.navCtrl.navigateForward('tabs/explore', {
        queryParams: {
          authUser: res
        }
      });
    }).catch(err => {
      this.authService.presentAlert("registration", err.error)
    });
  }

  navToLogin() {
    this.navCtrl.navigateForward('home');
  }

}
