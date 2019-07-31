import { Component, OnInit } from '@angular/core';
import { Listings } from 'src/app/models/listings.model';
import { ListingService } from '../../services/listing.service'

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  listings: Listings[]

  constructor(
    private listingService: ListingService
  ) { }

  ngOnInit() {
    this.getAll()
  }

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  getAll()
  {
    this.listingService.getAll()
    .then((res: Listings[]) => (this.listings = res))
     .catch(err => console.log(err))
  }

}