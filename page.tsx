import Link from 'next/link';
import { Header } from '@/components/Header';
import { ExperienceCard } from '@/components/Card';
import { experiences } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div>
            <div className="chips"><span className="chip green">Marketplace verificado</span><span className="chip">Guias reais</span><span className="chip">Pagamento seguro</span></div>
            <h1>O Airbnb da pesca esportiva no Brasil.</h1>
            <p>Encontre guias verificados, compare experiências, veja avaliações reais e reserve pescarias com segurança em poucos cliques.</p>
            <div className="searchBox">
              <input placeholder="Destino: cidade, rio ou represa" />
              <select><option>Espécie-alvo</option><option>Tucunaré</option><option>Robalo</option><option>Dourado</option></select>
              <input type="date" />
              <Link className="button" href="/buscar">Buscar</Link>
            </div>
          </div>
          <div className="heroPanel">
            <div className="floating"><strong>Reserva inteligente</strong><p>Data, preço, guia, estrutura, avaliações e regras claras antes do pagamento.</p></div>
            <div className="floating"><strong>Guias profissionais</strong><p>Perfil completo, documentos, fotos reais, agenda e histórico de avaliações.</p></div>
            <div className="floating"><strong>Experiência protegida</strong><p>Pagamento intermediado, chat interno, suporte e política de reagendamento por clima.</p></div>
          </div>
        </section>
        <section className="section">
          <div className="sectionHeader"><h2>Pescarias em destaque</h2><Link href="/buscar" className="smallButton ghost">Ver todas</Link></div>
          <div className="grid">{experiences.map((exp) => <ExperienceCard exp={exp} key={exp.id} />)}</div>
        </section>
        <section className="section grid2">
          <div className="panel"><h2>Para pescadores</h2><p className="muted">Busque por localização, espécie, preço, data, estrutura e nível de experiência. Reserve com segurança e avalie depois.</p><Link href="/cadastro-pescador" className="button">Criar conta de pescador</Link></div>
          <div className="panel"><h2>Para guias</h2><p className="muted">Crie perfil profissional, cadastre pescarias, gerencie agenda, receba reservas e construa reputação nacional.</p><Link href="/cadastro-guia" className="button">Entrar como guia</Link></div>
        </section>
      </main>
      <footer className="footer">Fishing Hub © 2026 — plataforma conceitual pronta para MVP.</footer>
    </>
  );
}
