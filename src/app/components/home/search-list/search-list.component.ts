import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { map, takeUntil, tap } from 'rxjs/operators';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnChanges, OnDestroy {
  /**
   * Get location value from parent component
   */
  @Input() location!: string;

  /**
   * Is Loading flag
   */
  isLoading!: boolean;

  /**
   * Search result lit
   */
  searchResult!: Array<any>;

  /**
   * Subject handler
   */
  private readonly destroy$ = new Subject();

  constructor(private bikeService: BikeService) {}

  ngOnChanges(): void {
    this.searchBike();
  }

  /**
   * Search bikes from the API
   * It will search with empty location on initial load
   */
  searchBike() {
    this.isLoading = true;
    this.searchResult = [];

    this.bikeService
      .searchBikes(this.location ?? '')
      .pipe(
        takeUntil(this.destroy$),
        map((response) => {
          response.bikes.map((bike: { thumb: any }) => {
            bike.thumb ??= '/assets/images/bike-placeholder.svg';
          });

          return response.bikes;
        }),
        tap(() => (this.isLoading = false))
      )
      .subscribe((response) => {
        this.searchResult = response;
      });
  }

  /**
   * Perform custom clean-up, invoked immediately before a directive,
   * pipe, or service instance is destroyed.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
