import { Component } from '@angular/core';
import { Header } from './header/header';
import { News } from './news/news';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, News, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  siteName = 'Мої новини';
}