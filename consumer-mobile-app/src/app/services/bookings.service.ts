import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(
    private http: HttpClient
  ) { }

  createBooking(newBooking) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.post(environment.BaseURL + '/api/bookings', newBooking, {headers})
      .subscribe((response) => {
        resolve(response);
      },
      (err) => {
        console.log(err);
        reject(err);
      });
    });
  }

}
