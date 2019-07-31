import { Component, OnInit } from '@angular/core';
import { NavController, AlertController }  from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public authUser = new User();

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    public alertCtrl: AlertController
  ) {}
  
  // async presentAlert(source, err) {
  //   const alert = await this.alertCtrl.create({
  //     header: "Alert",
  //     subHeader: "Problem with " + source,
  //     message: err,
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

  ngOnInit() {}

  login() {
    console.log("authUser: ", this.authUser)
    this.authService.login(this.authUser).then(res => {
      
      const testId = localStorage.getItem('userid');
      
      console.log("testId: " + testId) 
      console.log("authUser: " + this.authUser)

      this.navCtrl.navigateForward('tabs/explore', {
        queryParams: {
          authUser: res
        }
      });
    }).catch(err => {
      this.authService.presentAlert("login", err.error)
      // this.presentAlert("login", err.error)
    });
    
    // this.navCtrl.navigateForward('tabs/explore');
  }

  navToRegister() {
    console.log("registration working")
    this.navCtrl.navigateForward('registration');
  }

}
