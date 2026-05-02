import type { Metadata } from "next";
import { Footer, Header } from "@/components/FishingHub";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fishing Hub",
  description: "Marketplace brasileiro de pesca esportiva com guias verificados."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
