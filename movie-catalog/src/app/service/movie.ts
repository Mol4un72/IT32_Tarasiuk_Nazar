import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  director: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    {
      id: 1,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      description: 'Науково-фантастичний фільм'
    },
    {
      id: 2,
      title: 'Avatar',
      director: 'James Cameron',
      description: 'Фантастичний фільм про іншу планету'
    },
    {
      id: 3,
      title: 'Titanic',
      director: 'James Cameron',
      description: 'Драма про відомий корабель Titanic'
    }
  ];

  getItems() {
    return this.movies;
  }

  getItemById(id: number) {
    return this.movies.find(movie => movie.id === id);
  }

  addItem(movie: Omit<Movie, 'id'>) {
    const newMovie: Movie = {
      id: this.movies.length + 1,
      ...movie
    };

    this.movies.push(newMovie);
  }
}