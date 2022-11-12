import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { BikeService } from 'src/app/services/bike.service';
import { takeUntil, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.scss'],
})
export class BikeDetailComponent implements OnInit {
  /**
   * Bike Details
   */
  bikeDetails$!: Observable<any>;

  /**
   * Is Loading flag
   */
  isLoading: boolean = true;

  /**
   * Subject handler
   */
  private readonly destroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private bikeService: BikeService,
    private titleService: Title
  ) {}

  /**
   * Call API and format data
   */
  ngOnInit(): void {
    const bikeId = this.activatedRoute.snapshot.paramMap.get('bikeId') ?? '';

    // Get bike details
    this.bikeDetails$ = this.bikeService.getBikeById(bikeId).pipe(
      takeUntil(this.destroy$),
      map((response) => {
        this.titleService.setTitle(
          `${response.bike.status.toUpperCase()} ${response.bike.title}`
        );
        return response.bike;
      }),
      tap(() => (this.isLoading = false))
    );
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