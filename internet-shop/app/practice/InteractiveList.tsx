
"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

type Props = {
  arr: Product[];
};

export function InteractiveList({ arr }: Props) {
  const [search, setSearch] = useState("");
  const [cheapOnly, setCheapOnly] = useState(false);

  const filteredProducts = arr.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrice = !cheapOnly || product.price <= 10000;

    return matchesName && matchesPrice;
  });

  return (
    <section>
      <input
        type="text"
        placeholder="Пошук товару..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <label>
          <input
            type="checkbox"
            checked={cheapOnly}
            onChange={(e) => setCheapOnly(e.target.checked)}
          />
          Тільки до 10 000 грн
        </label>
      </div>

      <p>Знайдено товарів: {filteredProducts.length}</p>

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Категорія: {product.category}</p>
          <p>Ціна: {product.price.toLocaleString("uk-UA")} грн</p>
        </div>
      ))}

      {filteredProducts.length === 0 && (
        <p>Товарів не знайдено.</p>
      )}
    </section>
  );
}