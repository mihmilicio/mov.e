import { Movie } from './../../models/movie.interface';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.list().subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
  });
  }

}
