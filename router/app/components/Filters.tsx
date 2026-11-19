'use client';

import { useState } from 'react';

export type Book = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
};

export default function Filter({ books }: { books: Book[] }) {
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) => {
    const title = book.title.toLowerCase();
    const author = book.author_name?.join(' ').toLowerCase() || '';

    return (
      title.includes(search.toLowerCase()) ||
      author.includes(search.toLowerCase())
    );
  });

  return (
    <section>
      <input
        type="text"
        placeholder="Пошук за назвою або автором..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <p>Знайдено книг: {filteredBooks.length}</p>

      <div className="book-list">
        {filteredBooks.map((book) => (
          <article key={book.key} className="book-card">
            <h2>{book.title}</h2>

            <p>
              Автор: {book.author_name?.join(', ') || 'Невідомий'}
            </p>

            <p>
              Рік видання: {book.first_publish_year || 'Невідомий'}
            </p>
          </article>
        ))}

        {filteredBooks.length === 0 && (
          <p>Книг за вашим запитом не знайдено.</p>
        )}
      </div>
    </section>
  );
}