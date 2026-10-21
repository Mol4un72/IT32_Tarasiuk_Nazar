import Link from 'next/link';

export function Header() {
  return (
    <header>
      <Link href="/" className="logo">
        TechStore
      </Link>

      <nav>
        <Link href="/">Головна</Link>
        <Link href="/catalog">Каталог</Link>
        <Link href="/catalog/smartphones">Смартфони</Link>
        <Link href="/catalog/laptops">Ноутбуки</Link>
        <Link href="/contacts">Контакти</Link>
      </nav>
    </header>
  );
}