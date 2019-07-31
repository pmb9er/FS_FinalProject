import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model'

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  public user: User = new User();

  constructor(
    // private navCtrl: NavController,
  private userService: UserService) 
    {
      this.user.id = localStorage.getItem("userid");

      this.userService.getUserByID(this.user.id)
      .then((res: User) => {
        this.user = res
      })
      .catch(err => {
        console.log("err: ", err)
      })
    }

    // ionViewWillEnter() {
    //   console.log({"userid": this.id});
    //   this.userService.getUserByID(this.id).then(res => {
    //     this.user = res;
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // }

    

}
