import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="hero">
      <h1>Ласкаво просимо до E-Library!</h1>

      <p>
        Електронна бібліотека — місце, де можна знайти
        цікаві книги та подати заявку на потрібне видання.
      </p>

      <div className="actions">
        <Link href="/catalog" className="button">
          Переглянути каталог
        </Link>

        <Link href="/form" className="button secondary">
          Залишити заявку
        </Link>
      </div>
    </section>
  );
}