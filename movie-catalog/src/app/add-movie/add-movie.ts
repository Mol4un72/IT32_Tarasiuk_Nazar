import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MovieService } from '../service/movie';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule, NgIf],
  templateUrl: './add-movie.html'
})
export class AddMovie {

  submitted = false;

  title = '';
  director = '';
  description = '';

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  addMovie(form: any) {

    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.movieService.addItem({
      title: this.title,
      director: this.director,
      description: this.description
    });

    form.resetForm();

    this.submitted = false;

    this.router.navigate(['/movies']);
  }
}