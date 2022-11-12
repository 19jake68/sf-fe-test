import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  /**
   * Base Url
   */
  private baseUrl: string;

  /**
   * Constructor
   */
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  /**
   * Get bike by id
   * @param id {number}
   * @return Bike
   */
  getBikeById(id: string): Observable<any> {
    return this.http.get(this.baseUrl + `/bikes/${id}`);
  }

  /**
   * Search bikes
   * Sample: https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=NL&distance=100&stolenness=stolen
   * @param
   * @return Bike
   */
  searchBikes(
    location: string,
    distance: number = 100,
    stolenness: string = 'proximity',
    page: number = 1,
    perPage: number = 20
  ): Observable<any> {
    // Build query string
    const query = new URLSearchParams();
    query.append('location', location);
    query.append('distance', distance.toString());
    query.append('stolenness', stolenness);
    query.append('page', page.toString());
    query.append('per_page', perPage.toString());

    return this.http.get(this.baseUrl + '/search?' + query.toString());
  }
}
