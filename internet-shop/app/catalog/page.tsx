import Link from 'next/link';
import { products } from '@/data/products'

export default function Catalog() {
  return (
    <section>
      <h1>Каталог товарів</h1>

      <p>Оберіть категорію або перегляньте всі товари.</p>

      <div>
        {products.map((product) => (
          <article key={product.id}>
            <h2>{product.name}</h2>
            <p>Категорія: {product.category}</p>
            <p>Ціна: {product.price.toLocaleString('uk-UA')} грн</p>
          </article>
        ))}
      </div>

      <Link href="/catalog/smartphones">Смартфони</Link>
      {' | '}
      <Link href="/catalog/laptops">Ноутбуки</Link>
    </section>
  );
}