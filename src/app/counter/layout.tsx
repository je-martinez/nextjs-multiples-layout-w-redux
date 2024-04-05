import Header from "@/components/layouts/counter/Header";
import Footer from "@/components/layouts/counter/Footer";

export default function CounterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
