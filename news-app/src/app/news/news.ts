import { Component } from '@angular/core';
import { NewsCard } from '../news-card/news-card';

@Component({
  selector: 'app-news',
  imports: [NewsCard],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {
  newsTitle = 'Так пишу як будь-то ви це читаєте';
  newsAuthor = 'точно не чатік';

  message = '';

  onRead() {
    this.message = 'Відкрито новину';
  }
}