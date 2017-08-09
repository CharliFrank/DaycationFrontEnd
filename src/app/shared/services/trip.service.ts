import { Injectable } from '@angular/core';

@Injectable()
export class TripService {
  public events: Array<String>;
  public food: Array<String>;
  public move: Array<String>;
  public eventChoices: Array<String>;
  public foodChoices: Array<String>;
  public transPortChoices: Array<String>;

  constructor(
  ) {
    this.events =
    [
    'airport',
    'amusement_park',
    'aquarium',
    'art_gallery',
    'atm',
    'bakery',
    'bank',
    'bar',
    'beauty_salon',
    'bicycle_store',
    'book_store',
    'bowling_alley',
    'bus_station',
    'cafe',
    'campground',
    'car_dealer',
    'car_rental',
    'car_repair',
    'car_wash',
    'casino',
    'cemetery',
    'church',
    'city_hall',
    'clothing_store',
    'convenience_store',
    'courthouse',
    'department_store',
    'embassy',
    'establishment',
    'finance',
    'fire_station',
    'florist',
    'food',
    'gas_station',
    'general_contractor',
    'grocery_or_supermarket',
    'health',
    'hindu_temple',
    'home_goods_store',
    'hospital',
    'insurance_agency',
    'jewelry_store',
    'laundry',
    'lawyer',
    'library',
    'liquor_store',
    'local_government_office',
    'locksmith',
    'lodging',
    'meal_delivery',
    'meal_takeaway',
    'mosque',
    'movie_rental',
    'movie_theater',
    'moving_company',
    'museum',
    'night_club',
    'painter',
    'park',
    'parking',
    'pet_store',
    'pharmacy',
    'physiotherapist',
    'place_of_worship',
    'plumber',
    'police',
    'post_office',
    'real_estate_agency',
    'restaurant',
    'roofing_contractor',
    'rv_park',
    'school',
    'shopping_mall',
    'spa',
    'stadium',
    'storage',
    'store',
    'subway_station',
    'synagogue',
    'train_station',
    'transit_station',
    'travel_agency',
    'university',
    'zoo'];
  this.move = ['bike', 'walk', 'drive', 'bus'
  ];
  }

}
