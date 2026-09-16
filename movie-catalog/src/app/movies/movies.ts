import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [
    FormsModule,
    NgClass,
    NgFor,
    NgIf,
    RouterLink
  ],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {

  movies = [
    {
      id: 1,
      title: 'Interstellar',
      year: 2014,
      rating: 9
    },
    {
      id: 2,
      title: 'Avatar',
      year: 2009,
      rating: 8
    },
    {
      id: 3,
      title: 'Titanic',
      year: 1997,
      rating: 7
    }
  ];

  newTitle = '';
  newYear: number | null = null;
  newRating: number | null = null;

  addMovie() {

    if (this.newTitle.trim() === '') {
      return;
    }

    const newMovie = {
      id: this.movies.length > 0
        ? Math.max(...this.movies.map(movie => movie.id)) + 1
        : 1,

      title: this.newTitle.trim(),

      year: this.newYear ?? 0,

      rating: this.newRating ?? 0
    };

    this.movies.push(newMovie);

    this.newTitle = '';
    this.newYear = null;
    this.newRating = null;
  }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
  }

  getRatingClass(rating: number) {

    if (rating >= 8) {
      return 'high';
    }

    if (rating >= 5) {
      return 'medium';
    }

    return 'low';
  }
}