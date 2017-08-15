import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Config } from '../../../config';
import { MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;
@Component({
  selector: 'app-trip-preview',
  templateUrl: './trip-preview.component.html',
  styleUrls: ['./trip-preview.component.scss']
})
export class TripPreviewComponent implements OnInit {
  public stops: Array<any>;
  centerLat: number = 30.031583599999994;
  centerLng: number = -90.02444679999999;
  lat: number;
  long: number;
  geocoder: any;
  public coords: Array<any> = [];
  public coordsReady: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public config: Config,
    public mapsApiLoader: MapsAPILoader
  ) {
    this.config = config;
    setTimeout(() => {
      this.getCoords();
    }, 1000);
  }

  ngOnInit(): void {
    const dollarSigns = ['$', '$$', '$$$', '$$$$'];
    this.route.queryParams.map((data) => {
      this.stops = data.trip.map(stop => {
        stop = JSON.parse(JSON.parse(stop));
        let holder;
        if (stop.price > 0) {
          holder = stop.price;
          stop.price = dollarSigns[holder];
        }
        if (stop.price < 0) { stop.price = 'Unknown'; }
        // holder = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${stop.photo}&key=${this.config.key}`;
        stop.photo = holder;

        return stop;
      });
      return data;
    }).toPromise().then(res => res);
  }

  mapClicked($event: MouseEvent) {
    // this.getCoords();
    console.log('$event', $event);
  }

  async getCoords() {
    await this.stops.forEach(async (stop, index) => {
      const holder = await this.getLatitudeLongitude(this.geoCoords, stop.address, index);
      console.log('holder', holder);
      console.log('this.coords', this.coords);
    });
    this.coordsReady = true;
  }
  geoCoords(geo, index, coordsArr): string {
    console.log('geo', geo);
    const lat = geo.geometry.location.lat();
    const lng = geo.geometry.location.lng();

    // console.log('geo.geometry.location.lat', geo.geometry.location.lat());
    // console.log('geo.geometry.location.lng', geo.geometry.location.lng());
    console.log(`lat,lng`, `${lat},${lng}`);
    // this.coords.push([lat, lng]);
    coordsArr.push([lat, lng]);
    return `${lat},${lng}`;
  }
  getLatitudeLongitude(callback, address, index): string {
    const func = this.geoCoords;
    const coordsArr = this.coords;
    // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
    address = address || 'Ferrol, Galicia, Spain';
    // Initialize the Geocoder
    const geocoder = new google.maps.Geocoder();
    if (geocoder) {
      geocoder.geocode({
        'address': address
      }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          // return callback(results[0], index);
          return func(results[0], index, coordsArr);
        } else {
          return 'tf?!!!';
        }
      });
    } else {
      return 'sorry';
    }
  }
}
