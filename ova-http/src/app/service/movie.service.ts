import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, Subject } from 'rxjs'
import { environment } from 'src/environments/environment'
import { IMovie } from 'src/models/IMovie'
import { IOmdbResponse } from 'src/models/IOmdbResponse'

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = new Subject<IMovie[]>();
  movies$ =this.movies.asObservable()

  constructor(private http: HttpClient) {}

  getMovies() {
    this.http
      .get<IOmdbResponse>(environment.omdbUrl + 's=star')
      .subscribe((data) => {
        console.log(data.Search)
        this.movies.next(data.Search)
      })
  }

  searchMovie(searchTerm: string): Observable<IMovie[]> {
    return this.http
      .get<IOmdbResponse>(environment.omdbUrl + 's=' + searchTerm)
      .pipe(map((data: IOmdbResponse) => data.Search));
  }
}
