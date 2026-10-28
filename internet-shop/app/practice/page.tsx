
import { InteractiveList } from "./InteractiveList";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S25",
    category: "Смартфон",
    price: 32999,
  },
  {
    id: 2,
    name: "iPhone 16",
    category: "Смартфон",
    price: 39999,
  },
  {
    id: 3,
    name: "Lenovo IdeaPad Slim 5",
    category: "Ноутбук",
    price: 28999,
  },
  {
    id: 4,
    name: "ASUS Vivobook 15",
    category: "Ноутбук",
    price: 25999,
  },
  {
    id: 5,
    name: "Logitech Mouse",
    category: "Аксесуари",
    price: 799,
  },
  {
    id: 6,
    name: "Keychron Keyboard",
    category: "Аксесуари",
    price: 4500,
  },
];

export default function PracticePage() {
  return (
    <main>
      <h1>Магазин техніки</h1>
      <p>Загальна кількість товарів: {products.length}</p>

      <InteractiveList arr={products} />
    </main>
  );
}
