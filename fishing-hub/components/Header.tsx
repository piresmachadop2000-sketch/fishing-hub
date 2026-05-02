import Link from 'next/link';

export function Header() {
  return (
    <header className="header">
      <Link href="/" className="brand"><span>🎣</span> Fishing Hub</Link>
      <nav>
        <Link href="/buscar">Buscar</Link>
        <Link href="/dashboard-guia">Área do guia</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login" className="navButton">Entrar</Link>
      </nav>
    </header>
  );
}
