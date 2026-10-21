import Link from 'next/link';

export function Navbar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <Link href="/catalog">Усі товари</Link>
        {' | '}
        <Link href="/catalog/smartphones">Смартфони</Link>
        {' | '}
        <Link href="/catalog/laptops">Ноутбуки</Link>
      </nav>

      <hr />

      {children}
    </div>
  );
}