import { Component, OnInit } from '@angular/core';
import { NavController, AlertController }  from '@ionic/angular';
import { Listings } from '../../models/listings.model';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage implements OnInit {
  public listings: Listings[];

  constructor(
    private navCtrl: NavController,
    public listingsService: ListingsService,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {
    // this.listingsService.getListItems().then(res=> {
    //   console.log(res);
    //   this.listings = res;
    // }).catch(err => {
    //   console.log(err);
    // })
    this.getAll()
  }

  navToListing(id) {
    this.navCtrl.navigateForward(['listings'],
    {queryParams: {listingsId: id}
  })
  }

  getAll() {
    this.listingsService.getAll()
    .then((res: Listings[]) => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

}
