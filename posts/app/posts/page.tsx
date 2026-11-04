
type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostsPage() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=8',
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Помилка завантаження публікацій');
  }

  const posts: Post[] = await res.json();

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Список публікацій
      </h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.id} className="rounded-lg border p-4">
            <h2 className="mb-2 text-xl font-semibold">
              {post.title}
            </h2>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
