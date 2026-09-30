import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { MovieService } from '../service/movie';

@Component({
  selector: 'app-movie-detail',
  imports: [NgIf, RouterLink],
  templateUrl: './movie-detail.html'
})
export class MovieDetail {

  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {

    this.route.params.subscribe(params => {

      const id = Number(params['id']);

      this.movie = this.movieService.getItemById(id);

    });
  }
}