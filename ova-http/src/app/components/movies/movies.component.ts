import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { IMovie } from 'src/models/IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private service:MovieService) { }

  ngOnInit(): void {
    this.service.movies$.subscribe((dataFromService) => {
      this.movies = dataFromService;
      console.log(this.movies);
    })
    this.service.getMovies()

  }

}
