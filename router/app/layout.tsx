import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Електронна бібліотека',
  description: 'Каталог електронних книг',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <header className="header">
          <Link href="/" className="logo">
            E-Library
          </Link>

          <nav>
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/form">Заявка</Link>
          </nav>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          © 2026 Електронна бібліотека
        </footer>
      </body>
    </html>
  );
}