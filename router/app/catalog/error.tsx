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
      <h1>Сталася помилка!</h1>
      <p>{error.message}</p>

      <button onClick={() => reset()} className="button">
        Спробувати ще раз
      </button>
    </div>
  );
}