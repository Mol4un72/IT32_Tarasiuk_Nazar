'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Не вдалося завантажити товари</h2>

      <p>Сталася помилка. Спробуйте ще раз.</p>

      <button onClick={() => reset()}>
        Спробувати знову
      </button>
    </div>
  );
}