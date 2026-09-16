import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Movies } from './movies/movies';
import { MovieDetail } from './movie-detail/movie-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'movies',
    component: Movies
  },
  {
    path: 'movie/:id',
    component: MovieDetail
  }
];