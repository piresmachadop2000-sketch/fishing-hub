import {
  BadgeCheck,
  BarChart3,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Compass,
  Fish,
  Heart,
  Home,
  LifeBuoy,
  Lock,
  MapPin,
  MessageCircle,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  User,
  Users,
  WalletCards
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { adminPages, anglerPages, experiences, guidePages, publicPages } from "@/lib/data";
import type { Experience } from "@/lib/data";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/buscar", label: "Buscar" },
  { href: "/experiencia/pantanal-dourado", label: "Experiência" },
  { href: "/guia/joao-arantes", label: "Guia" },
  { href: "/minhas-reservas", label: "Reservas" },
  { href: "/dashboard-guia", label: "Guia Pro" },
  { href: "/admin", label: "Admin" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-ink">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lagoon text-white">
            <Fish size={22} />
          </span>
          <span>Fishing Hub</span>
        </Link>
        <nav className="scrollbar-hidden hidden max-w-3xl items-center gap-1 overflow-x-auto md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition hover:bg-mist hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-lagoon sm:inline-flex">
            Entrar
          </Link>
          <Link href="/cadastro-pescador" className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">
            Começar
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-ink/60 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <strong className="text-ink">Fishing Hub</strong>
          <p className="mt-2">Marketplace de pesca esportiva com guias verificados no Brasil.</p>
        </div>
        <Link href="/buscar">Buscar pescarias</Link>
        <Link href="/cadastro-guia">Sou guia</Link>
        <Link href="/admin">Admin</Link>
        <span className="flex items-center gap-2">
          <LifeBuoy size={17} /> Suporte
        </span>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <>
      <section className="hero-image min-h-[620px] text-white">
        <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center px-4 pb-10 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
              <BadgeCheck size={18} /> Guias verificados no Brasil
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">Fishing Hub</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Encontre pescarias esportivas com guias experientes, reserve com segurança e viva destinos incríveis
              do Pantanal à Amazônia.
            </p>
          </div>
          <SearchBox />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Experiências em destaque" title="Pesque com quem conhece o rio" />
        <ExperienceGrid />
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div className="water-image min-h-[360px] rounded-[8px]" />
          <div className="flex flex-col justify-center">
            <SectionTitle eyebrow="Produto completo" title="Tudo que um marketplace precisa para validar o MVP" />
            <FeatureList />
          </div>
        </div>
      </section>
    </>
  );
}

export function SearchPage() {
  return (
    <PageShell eyebrow="Busca" title="Pescarias disponíveis">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-[8px] border border-ink/10 bg-white p-5 shadow-soft">
          <div className="mb-4 flex items-center gap-2 font-semibold">
            <SlidersHorizontal size={19} /> Filtros
          </div>
          {["Local", "Peixe", "Tipo de pesca", "Preço", "Avaliação"].map((filter) => (
            <label key={filter} className="mb-4 block">
              <span className="mb-2 block text-sm font-semibold text-ink/70">{filter}</span>
              <select className="w-full rounded-[8px] border border-ink/10 bg-mist px-3 py-3 text-sm outline-none">
                <option>Todos</option>
                <option>Mais procurados</option>
              </select>
            </label>
          ))}
        </aside>
        <ExperienceGrid />
      </div>
    </PageShell>
  );
}

export function ExperiencePage({ experience }: { experience?: Experience }) {
  const item = experience ?? experiences[0];

  return (
    <PageShell eyebrow="Experiência" title={item.title}>
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="relative h-[420px] overflow-hidden rounded-[8px]">
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" priority />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Stat icon={<MapPin />} label="Destino" value={`${item.city}, ${item.state}`} />
            <Stat icon={<Fish />} label="Espécie" value={item.fish} />
            <Stat icon={<CalendarDays />} label="Duração" value={item.duration} />
            <Stat icon={<Users />} label="Capacidade" value={item.capacity} />
          </div>
          <Panel title="O que está incluso">
            Barco equipado, piloteiro local, coletes, gelo, água, apoio para iscas artificiais e orientação completa
            para pescadores iniciantes ou experientes.
          </Panel>
          <Panel title="Regras e cancelamento">
            Reserva simulada com política flexível até 7 dias antes. O guia confirma disponibilidade e detalhes finais
            pelo chat da plataforma.
          </Panel>
        </div>
        <aside className="h-fit rounded-[8px] bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-2xl font-bold">R$ {item.price.toLocaleString("pt-BR")}</span>
            <span className="flex items-center gap-1 text-sm font-semibold">
              <Star size={17} className="fill-sun text-sun" /> {item.rating}
            </span>
          </div>
          <Field icon={<CalendarDays size={18} />} label="Data" value="18 de maio" />
          <div className="mt-3">
            <Field icon={<Users size={18} />} label="Pessoas" value="2 pescadores" />
          </div>
          <Link
            href="/reservar"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-[8px] bg-lagoon px-5 py-4 font-bold text-white"
          >
            Reservar agora <ChevronRight size={18} />
          </Link>
          <Link href={`/guia/${item.guideId}`} className="mt-4 flex items-center gap-3 rounded-[8px] bg-mist p-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sun/20 font-bold text-lagoon">
              {initials(item.guide)}
            </span>
            <span>
              <span className="block font-bold">{item.guide}</span>
              <span className="block text-sm text-ink/60">Guia verificado</span>
            </span>
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}

export function GuideProfilePage({ guideId = "joao-arantes" }: { guideId?: string }) {
  const item = experiences.find((experience) => experience.guideId === guideId) ?? experiences[0];

  return (
    <PageShell eyebrow="Perfil público" title={item.guide}>
      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-[8px] bg-white p-6 shadow-soft">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-lagoon text-3xl font-bold text-white">
            {initials(item.guide)}
          </div>
          <h2 className="mt-4 text-center text-2xl font-bold">{item.guide}</h2>
          <p className="text-center text-ink/60">
            {item.city}, {item.state}
          </p>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <MiniMetric value={String(item.rating)} label="nota" />
            <MiniMetric value={String(item.reviews)} label="reviews" />
            <MiniMetric value="97%" label="resposta" />
          </div>
          <Link href="/chat" className="mt-6 flex items-center justify-center gap-2 rounded-[8px] bg-ink px-4 py-3 font-semibold text-white">
            <MessageCircle size={18} /> Conversar
          </Link>
        </aside>
        <div>
          <Panel title="Sobre o guia">
            Guia profissional especializado em pesca esportiva, documentação validada, embarcação regularizada e
            atendimento recomendado para famílias, iniciantes e grupos experientes.
          </Panel>
          <SectionTitle eyebrow="Anúncios ativos" title="Pescarias deste guia" />
          <ExperienceGrid items={experiences.filter((experience) => experience.guideId === item.guideId)} />
        </div>
      </div>
    </PageShell>
  );
}

export function AuthPage({ mode }: { mode: "login" | "cadastro-pescador" | "cadastro-guia" }) {
  const isLogin = mode === "login";
  const title = isLogin ? "Entrar no Fishing Hub" : mode === "cadastro-guia" ? "Cadastro de guia" : "Cadastro de pescador";

  return (
    <PageShell eyebrow={isLogin ? "Acesso" : "Cadastro"} title={title}>
      <div className="mx-auto max-w-lg rounded-[8px] bg-white p-6 shadow-soft">
        <div className="grid gap-3">
          <button className="flex items-center justify-center gap-2 rounded-[8px] border border-ink/10 px-4 py-3 font-semibold">
            <Sparkles size={18} /> Continuar com Google
          </button>
          <button className="flex items-center justify-center gap-2 rounded-[8px] border border-ink/10 px-4 py-3 font-semibold">
            <Lock size={18} /> Continuar com Apple
          </button>
          <button className="flex items-center justify-center gap-2 rounded-[8px] border border-ink/10 px-4 py-3 font-semibold">
            <MessageCircle size={18} /> Telefone ou WhatsApp
          </button>
        </div>
        <div className="my-6 h-px bg-ink/10" />
        <label className="mb-3 block">
          <span className="mb-2 block text-sm font-semibold">E-mail</span>
          <input className="w-full rounded-[8px] border border-ink/10 bg-mist px-4 py-3 outline-none" placeholder="voce@email.com" />
        </label>
        <label className="mb-4 block">
          <span className="mb-2 block text-sm font-semibold">Senha</span>
          <input className="w-full rounded-[8px] border border-ink/10 bg-mist px-4 py-3 outline-none" placeholder="********" type="password" />
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/minhas-reservas" className="flex justify-center rounded-[8px] bg-lagoon px-4 py-3 font-bold text-white">
            Sou pescador
          </Link>
          <Link href="/dashboard-guia" className="flex justify-center rounded-[8px] bg-ink px-4 py-3 font-bold text-white">
            Sou guia
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

export function ProfileChoicePage() {
  return (
    <PageShell eyebrow="Perfil" title="Como você quer usar o Fishing Hub?">
      <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
        <Choice icon={<Fish />} title="Sou pescador" href="/cadastro-pescador" text="Buscar, reservar, favoritar e avaliar pescarias." />
        <Choice icon={<Compass />} title="Sou guia" href="/cadastro-guia" text="Cadastrar experiências, gerenciar agenda e receber reservas." />
      </div>
    </PageShell>
  );
}

export function AnglerWorkspacePage({ title = "Minhas reservas" }: { title?: string }) {
  return (
    <PageShell eyebrow="Pescador" title={title}>
      <DashboardLayout pages={anglerPages}>
        <div className="grid gap-5 md:grid-cols-3">
          <Stat icon={<Heart />} label="Favoritos" value="12 salvos" />
          <Stat icon={<CalendarDays />} label="Próxima reserva" value="18 maio" />
          <Stat icon={<WalletCards />} label="Pagamentos" value="Em dia" />
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_360px]">
          <ExperienceGrid />
          <ActivityPanel />
        </div>
      </DashboardLayout>
    </PageShell>
  );
}

export function ReservationPage() {
  return (
    <PageShell eyebrow="Reserva" title="Confirmar reserva">
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <Panel title="Dados da pescaria">
          Pantanal Dourado • 18 de maio • 2 pescadores • guia João Arantes. Esta tela simula a confirmação antes
          do pagamento real.
        </Panel>
        <aside className="h-fit rounded-[8px] bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold">Resumo</h2>
          <div className="my-5 space-y-3 text-ink/70">
            <p>Experiência: R$ 1.450</p>
            <p>Taxa da plataforma: R$ 145</p>
            <p className="font-bold text-ink">Total: R$ 1.595</p>
          </div>
          <Link href="/minhas-reservas" className="flex justify-center rounded-[8px] bg-lagoon px-4 py-3 font-bold text-white">
            Confirmar reserva
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}

export function ReviewsPage() {
  return (
    <PageShell eyebrow="Avaliações" title="Avaliações da comunidade">
      <div className="grid gap-5 md:grid-cols-3">
        {["Experiência incrível e guia muito pontual.", "Barco excelente, voltaria com certeza.", "Ótima explicação para iniciantes."].map((review) => (
          <Panel key={review} title="5.0 estrelas">
            {review}
          </Panel>
        ))}
      </div>
    </PageShell>
  );
}

export function ChatPage() {
  return (
    <PageShell eyebrow="Chat" title="Conversa com João Arantes">
      <div className="mx-auto max-w-3xl rounded-[8px] bg-white p-5 shadow-soft">
        {[
          ["João", "Olá! Tenho disponibilidade no dia 18. Vocês já têm experiência com arremesso?"],
          ["Você", "Somos dois pescadores, um iniciante. O pacote inclui equipamento?"],
          ["João", "Inclui apoio completo e posso separar conjuntos extras para vocês."]
        ].map(([name, text]) => (
          <div key={text} className={`mb-3 flex ${name === "Você" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-[8px] px-4 py-3 ${name === "Você" ? "bg-lagoon text-white" : "bg-mist"}`}>
              <strong className="block text-sm">{name}</strong>
              {text}
            </div>
          </div>
        ))}
        <div className="mt-5 flex gap-2">
          <input className="min-w-0 flex-1 rounded-[8px] border border-ink/10 bg-mist px-4 py-3 outline-none" placeholder="Digite sua mensagem" />
          <button className="rounded-[8px] bg-ink px-5 font-bold text-white">Enviar</button>
        </div>
      </div>
    </PageShell>
  );
}

export function GuideDashboardPage() {
  return (
    <PageShell eyebrow="Guia" title="Dashboard do guia">
      <DashboardLayout pages={guidePages}>
        <div className="grid gap-5 md:grid-cols-4">
          <Stat icon={<CalendarDays />} label="Agenda" value="9 datas" />
          <Stat icon={<Bell />} label="Reservas" value="4 novas" />
          <Stat icon={<CircleDollarSign />} label="Ganhos" value="R$ 8.420" />
          <Stat icon={<Star />} label="Nota" value="4.9" />
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Panel title="Reservas recebidas">18 maio • Pantanal dourado • 2 pescadores • aguardando confirmação.</Panel>
          <Panel title="Plano premium">Destaque seus anúncios nas buscas, receba selo premium e tenha prioridade em campanhas regionais.</Panel>
        </div>
      </DashboardLayout>
    </PageShell>
  );
}

export function GuideEditorPage() {
  return (
    <PageShell eyebrow="Guia" title="Criar anúncio de pescaria">
      <div className="mx-auto max-w-3xl rounded-[8px] bg-white p-6 shadow-soft">
        {["Título", "Descrição", "Cidade", "Estado", "Espécie-alvo", "Tipo de pesca", "Preço", "Capacidade"].map((field) => (
          <label key={field} className="mb-4 block">
            <span className="mb-2 block text-sm font-semibold">{field}</span>
            <input className="w-full rounded-[8px] border border-ink/10 bg-mist px-4 py-3 outline-none" placeholder={field} />
          </label>
        ))}
        <button className="rounded-[8px] bg-lagoon px-5 py-3 font-bold text-white">Salvar pescaria</button>
      </div>
    </PageShell>
  );
}

export function GuideAgendaPage() {
  return (
    <PageShell eyebrow="Guia" title="Agenda do guia">
      <DashboardLayout pages={guidePages}>
        <div className="grid gap-5 md:grid-cols-3">
          {["18 maio - Corumbá", "22 maio - Barcelos", "31 maio - Ilhabela"].map((date) => (
            <Panel key={date} title={date}>
              Disponibilidade, capacidade e reservas recebidas para a data selecionada.
            </Panel>
          ))}
        </div>
      </DashboardLayout>
    </PageShell>
  );
}

export function GuideFinancePage() {
  return (
    <PageShell eyebrow="Guia" title="Financeiro do guia">
      <DashboardLayout pages={guidePages}>
        <div className="grid gap-5 md:grid-cols-3">
          <Stat icon={<CircleDollarSign />} label="Receita mensal" value="R$ 8.420" />
          <Stat icon={<WalletCards />} label="A receber" value="R$ 3.200" />
          <Stat icon={<BarChart3 />} label="Comissão" value="10%" />
        </div>
      </DashboardLayout>
    </PageShell>
  );
}

export function AdminDashboardPage() {
  return (
    <PageShell eyebrow="Admin" title="Dashboard administrativo">
      <DashboardLayout pages={adminPages}>
        <div className="grid gap-5 md:grid-cols-4">
          <Stat icon={<ShieldCheck />} label="Guias pendentes" value="18" />
          <Stat icon={<CheckCircle2 />} label="Experiências" value="42" />
          <Stat icon={<Users />} label="Usuários" value="3.280" />
          <Stat icon={<BarChart3 />} label="GMV mensal" value="R$ 212k" />
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Panel title="Aprovação de guias">Validar documentos, embarcação, identidade e regiões de atuação.</Panel>
          <Panel title="Disputas">2 casos aguardando mediação entre pescador e guia.</Panel>
          <Panel title="Cupons">Campanha Pantanal com 14 usos esta semana.</Panel>
        </div>
      </DashboardLayout>
    </PageShell>
  );
}

export function InstitutionalPage() {
  return (
    <PageShell eyebrow="Institucional" title="Sobre o Fishing Hub">
      <div className="rounded-[8px] bg-white p-6 shadow-soft">
        <p className="max-w-3xl text-lg leading-8 text-ink/70">
          O Fishing Hub nasce para organizar o mercado de pesca esportiva no Brasil com guias verificados, reservas
          transparentes, suporte e qualidade acompanhada pela plataforma.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {publicPages.map((item) => (
            <div key={item} className="rounded-[8px] bg-mist p-4 font-semibold">
              {item}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

export function LegalPage({ title }: { title: string }) {
  return (
    <PageShell eyebrow="Legal" title={title}>
      <div className="rounded-[8px] bg-white p-6 leading-8 text-ink/70 shadow-soft">
        Este é um texto-base mockado para apresentação. Em produção, os termos devem ser revisados por assessoria
        jurídica, incluindo regras de pagamento, cancelamento, proteção de dados, mediação e responsabilidades dos guias.
      </div>
    </PageShell>
  );
}

function SearchBox() {
  return (
    <div className="mt-10 grid gap-3 rounded-[8px] bg-white p-3 text-ink shadow-soft md:grid-cols-[1.1fr_1fr_1fr_auto]">
      <Field icon={<MapPin size={18} />} label="Destino" value="Pantanal, Amazônia, litoral" />
      <Field icon={<Fish size={18} />} label="Espécie" value="Tucunaré, dourado, robalo" />
      <Field icon={<CalendarDays size={18} />} label="Data" value="Escolha uma data" />
      <Link
        href="/buscar"
        className="flex min-h-[64px] items-center justify-center gap-2 rounded-[8px] bg-coral px-6 font-semibold text-white"
      >
        <Search size={19} /> Buscar
      </Link>
    </div>
  );
}

function Choice({ icon, title, text, href }: { icon: React.ReactNode; title: string; text: string; href: string }) {
  return (
    <Link href={href} className="rounded-[8px] bg-white p-6 shadow-soft transition hover:-translate-y-1">
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lagoon text-white">{icon}</span>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-ink/60">{text}</p>
    </Link>
  );
}

function ExperienceGrid({ items = experiences }: { items?: Experience[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Link
          href={`/experiencia/${item.id}`}
          key={item.id}
          className="overflow-hidden rounded-[8px] bg-white shadow-soft transition hover:-translate-y-1"
        >
          <div className="relative h-56">
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            {item.premium && (
              <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-lagoon">
                Premium
              </span>
            )}
          </div>
          <div className="p-5">
            <div className="mb-2 flex items-center justify-between gap-3 text-sm text-ink/60">
              <span>
                {item.city}, {item.state}
              </span>
              <span className="flex items-center gap-1 font-semibold text-ink">
                <Star size={16} className="fill-sun text-sun" /> {item.rating}
              </span>
            </div>
            <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
            <p className="mt-2 text-sm text-ink/60">
              {item.fish} • {item.duration} • {item.capacity}
            </p>
            <p className="mt-4 font-bold">R$ {item.price.toLocaleString("pt-BR")} por experiência</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function DashboardLayout({ pages, children }: { pages: string[]; children: React.ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
      <aside className="h-fit rounded-[8px] bg-white p-4 shadow-soft">
        {pages.map((page, index) => (
          <button
            key={page}
            className={`mb-1 flex w-full items-center gap-2 rounded-[8px] px-3 py-3 text-left text-sm font-semibold ${
              index === 0 ? "bg-lagoon text-white" : "text-ink/70 hover:bg-mist"
            }`}
          >
            {index % 3 === 0 ? <Home size={17} /> : index % 3 === 1 ? <Settings size={17} /> : <User size={17} />}
            {page}
          </button>
        ))}
      </aside>
      <div>{children}</div>
    </div>
  );
}

function ActivityPanel() {
  return (
    <div className="rounded-[8px] bg-white p-5 shadow-soft">
      <h3 className="mb-4 text-lg font-bold">Atividade recente</h3>
      {["Reserva confirmada em Corumbá", "Guia respondeu sua mensagem", "Avaliação liberada após pescaria"].map((item) => (
        <div key={item} className="mb-3 flex gap-3 rounded-[8px] bg-mist p-3">
          <CheckCircle2 className="text-river" size={20} />
          <span className="text-sm font-medium">{item}</span>
        </div>
      ))}
    </div>
  );
}

function FeatureList() {
  const features: Array<[string, LucideIcon]> = [
    ["Busca e filtros", Search],
    ["Reservas e pagamentos simulados", WalletCards],
    ["Chat entre pescador e guia", MessageCircle],
    ["Avaliações e qualidade", Star],
    ["Dashboard do guia", Compass],
    ["Admin com aprovações", ShieldCheck]
  ];

  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {features.map(([label, Icon]) => (
        <div key={label} className="flex items-center gap-3 rounded-[8px] bg-mist p-4 font-semibold">
          <Icon className="text-lagoon" size={21} />
          {label}
        </div>
      ))}
    </div>
  );
}

function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex min-h-[64px] items-center gap-3 rounded-[8px] border border-ink/10 px-4">
      <span className="text-lagoon">{icon}</span>
      <span>
        <span className="block text-xs font-bold uppercase text-ink/50">{label}</span>
        <span className="block text-sm font-semibold">{value}</span>
      </span>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[8px] bg-white p-5 shadow-soft">
      <div className="mb-4 text-lagoon">{icon}</div>
      <p className="text-sm font-semibold text-ink/50">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}

function MiniMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[8px] bg-mist p-3">
      <span className="block font-bold">{value}</span>
      <span className="text-xs text-ink/60">{label}</span>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6 rounded-[8px] bg-white p-6 shadow-soft">
      <h2 className="mb-3 text-xl font-bold">{title}</h2>
      <div className="leading-7 text-ink/70">{children}</div>
    </section>
  );
}

function PageShell({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle eyebrow={eyebrow} title={title} />
      {children}
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-sm font-bold uppercase text-river">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-normal text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
