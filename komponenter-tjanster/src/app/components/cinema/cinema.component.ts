import { Visitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  movie: Movie = new Movie("Star Wars –Rise of Skywalker", 210)

  constructor(private service:MovieService) { }

  ngOnInit(): void {
      this.service.publishedMovie.subscribe((published: Movie) => {
      console.log(published);
    });
  }
    movieAnnouncment() {
    this.service.movieAnnouncement({ title: 'Star Wars–Rise of Skywalker', length:210 })
  }
}
