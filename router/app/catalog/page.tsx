import Filter, { type Book } from '../components/Filters';

type ApiResponse = {
  docs: Book[];
};

export default async function CatalogPage() {
  const response = await fetch(
    'https://openlibrary.org/search.json?q=javascript&limit=10',
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error('Не вдалося завантажити каталог книг');
  }

  const data: ApiResponse = await response.json();

  return (
    <section>
      <h1>Каталог книг</h1>

      <p className="description">
        Книги про програмування та JavaScript з Open Library.
      </p>

      <Filter books={data.docs} />
    </section>
  );
}