import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <h1>Ласкаво просимо до TechStore!</h1>

      <p>
        У нас ви знайдете сучасні смартфони та ноутбуки
        для роботи, навчання й розваг.
      </p>

      <Link href="/catalog">Переглянути каталог</Link>
    </section>
  );
}