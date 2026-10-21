import "./globals.css";
import { Header } from './components/layout/header';
import { Navbar } from './components/layout/navbar'
import { Footer } from './components/layout/footer'

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" >
      <body className="min-h-full flex flex-col">
        <Header />
        <Navbar />
        <Footer />
        {children}
      </body>
    </html>
  );
}
