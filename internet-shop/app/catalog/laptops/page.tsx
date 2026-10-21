export default function Laptops() {
  const products = [
    { id: 1, name: 'Lenovo IdeaPad Slim 5', price: 28999 },
    { id: 2, name: 'ASUS Vivobook 15', price: 25999 },
    { id: 3, name: 'MacBook Air M4', price: 49999 },
  ];

  return (
    <section>
      <h1>Ноутбуки</h1>

      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>Ціна: {product.price.toLocaleString('uk-UA')} грн</p>
        </article>
      ))}
    </section>
  );
}