import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  imports: [NgIf, RouterLink],
  templateUrl: './movie-detail.html'
})
export class MovieDetail {

  movies = [
    { id: 1, title: 'Interstellar', year: 2014, rating: 9 },
    { id: 2, title: 'Avatar', year: 2009, rating: 8 },
    { id: 3, title: 'Titanic', year: 1997, rating: 7 }
  ];

  movie: any;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movies.find(movie => movie.id === id);
  }
}