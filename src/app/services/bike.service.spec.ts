import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BikeService } from './bike.service';
import { environment } from '../../environments/environment';

describe('BikeService', () => {
  let service: BikeService;
  let httpMock: HttpTestingController;

  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BikeService);
  });

  afterEach(() => {
    // Verify that no unmatched requests are outstanding
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call API /v3/search when searchBikes() function is called', fakeAsync(() => {
    const response = {
      bike: {
        name: '',
        id: 12345
      }
    };

    service.searchBikes('').subscribe(res => {
      expect(res).toEqual(response);
    });

    // Expect that a single request has been made that matches the give
    // URL, and return its mock
    const api = httpMock.expectOne('https://bikeindex.org:443/api/v3/search?location=&distance=100&stolenness=proximity&page=1&per_page=20');
    expect(api.request.method).toBe('GET');

    // Resolve the request by returning the provided parameters
    api.flush(response);
    tick();
  }));

  it('should return an error message when searchBikes() function encountered a server error', fakeAsync(() => {
    const mockError = { status: 500, statusText: 'Server error' };
    const data = { message: 'error message' };

    service.searchBikes('').subscribe(
      () => { fail(); },
      err => {
        expect(err.status).toBe(500);
        expect(err.error.message).toBe('error message');
      }
    );

    httpMock.expectOne('https://bikeindex.org:443/api/v3/search?location=&distance=100&stolenness=proximity&page=1&per_page=20').flush(data, mockError);
    tick();
  }));

  it('should call API /v3/bikes/{id} when getBikeById({id}) function is called', fakeAsync(() => {
    const response = {
      bike: {
        id: 12345,
        name: 'Bike'
      }
    }

    service.getBikeById('12345').subscribe(res => {
      expect(res).toEqual(response);
    });

    // Expect that a single request has been made that matches the given URL,
    // and return its mock
    const api = httpMock.expectOne('https://bikeindex.org:443/api/v3/bikes/12345');
    expect(api.request.method).toBe('GET');

    // Resolve the request by returning the provided parameters
    api.flush(response);
    tick();
  }));

  it('should return an error message when getBikeById({id}) function encountered a server error', fakeAsync(() => {
    const mockError = { status: 500, statusText: 'Server error' };
    const data = { message: 'error message' };

    service.getBikeById('').subscribe(
      () => { fail(); },
      err => {
        expect(err.status).toBe(500);
        expect(err.error.message).toBe('error message');
      }
    );

    httpMock.expectOne('https://bikeindex.org:443/api/v3/bikes/').flush(data, mockError);
    tick();
  }));
});
