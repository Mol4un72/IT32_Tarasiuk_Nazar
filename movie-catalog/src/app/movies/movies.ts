import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MovieService } from '../service/movie';

@Component({
  selector: 'app-movies',
  imports: [NgFor, RouterLink],
  templateUrl: './movies.html'
})
export class Movies {

  movies: any[];

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getItems();
  }
}