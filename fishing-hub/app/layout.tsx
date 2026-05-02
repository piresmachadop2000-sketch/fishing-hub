import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fishing Hub — Marketplace de Pesca Esportiva',
  description: 'O Airbnb da pesca esportiva no Brasil.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
