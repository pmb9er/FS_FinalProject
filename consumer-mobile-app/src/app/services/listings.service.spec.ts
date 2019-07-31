import { TestBed } from '@angular/core/testing';
import { Listings } from '../models/listings.model'

import { ListingsService } from './listings.service';

describe('ListingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListingsService = TestBed.get(ListingsService);
    expect(service).toBeTruthy();
  });
});

// describe('Listings', () => {
//   it('should create an instance', () => {
//     expect(new Listings()).toBeTruthy();
//   })
// })
