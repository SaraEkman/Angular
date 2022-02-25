import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { MovieService } from 'src/app/service/movie.service';
import { IMovie } from 'src/models/IMovie';

@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.scss']
})
export class MoviesearchComponent implements OnInit {
  searchTerm = new Subject<string>();
  movies: Observable<IMovie[]> = new Observable();
  isLoading: boolean = false;

  constructor(private service:MovieService) { }

  ngOnInit(): void {
    this.movies = this.searchTerm.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchTermFromUser) => {
        this.isLoading = true;
        return this.service.searchMovie(searchTermFromUser)
      })
    );
    // this.movies.subscribe((movies)=> {console.log(movies);})

    this.movies.subscribe(() => {
      this.isLoading = false;
    })

  }
  search(inputText: string) {
    this.searchTerm.next(inputText);
  }

}
