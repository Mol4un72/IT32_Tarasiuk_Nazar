import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = [
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

  addItem(movie: any) {
    const newMovie = {
      id: this.movies.length + 1,
      title: movie.title,
      director: movie.director,
      description: movie.description
    };

    this.movies.push(newMovie);
  }
}