export default function Smartphones() {
  const products = [
    { id: 1, name: 'Samsung Galaxy S25', price: 32999 },
    { id: 2, name: 'iPhone 16', price: 39999 },
    { id: 3, name: 'Google Pixel 9', price: 29999 },
  ];

  return (
    <section>
      <h1>Смартфони</h1>

      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>Ціна: {product.price.toLocaleString('uk-UA')} грн</p>
        </article>
      ))}
    </section>
  );
}