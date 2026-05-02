set -e

mkdir -p app components lib
mkdir -p app/buscar app/experiencia/[id] app/guia/[id] app/login
mkdir -p app/cadastro-guia app/cadastro-pescador app/minhas-reservas app/reservar
mkdir -p app/chat app/avaliacoes app/dashboard-guia app/criar-anuncio
mkdir -p app/agenda-guia app/financeiro-guia app/admin app/perfil
mkdir -p app/institucional app/termos app/privacidade

cp FishingHub.tsx components/FishingHub.tsx
cp data.ts lib/data.ts
cp globals.css app/globals.css
cp layout.tsx app/layout.tsx

page() {
  file="$1"
  component="$2"
  props="$3"
  printf 'import { %s } from "@/components/FishingHub";\n\nexport default function Page() {\n  return <%s %s/>;\n}\n' "$component" "$component" "$props" > "$file"
}

page app/page.tsx LandingPage ""
page app/buscar/page.tsx SearchPage ""
page app/experiencia/[id]/page.tsx ExperiencePage ""
page app/guia/[id]/page.tsx GuideProfilePage ""
page app/login/page.tsx AuthPage 'mode="login" '
page app/cadastro-guia/page.tsx AuthPage 'mode="cadastro-guia" '
page app/cadastro-pescador/page.tsx AuthPage 'mode="cadastro-pescador" '
page app/minhas-reservas/page.tsx AnglerWorkspacePage 'title="Minhas reservas" '
page app/reservar/page.tsx ReservationPage ""
page app/chat/page.tsx ChatPage ""
page app/avaliacoes/page.tsx ReviewsPage ""
page app/dashboard-guia/page.tsx GuideDashboardPage ""
page app/criar-anuncio/page.tsx GuideEditorPage ""
page app/agenda-guia/page.tsx GuideAgendaPage ""
page app/financeiro-guia/page.tsx GuideFinancePage ""
page app/admin/page.tsx AdminDashboardPage ""
page app/perfil/page.tsx ProfileChoicePage ""
page app/institucional/page.tsx InstitutionalPage ""
page app/termos/page.tsx LegalPage 'title="Termos de uso" '
page app/privacidade/page.tsx LegalPage 'title="Política de privacidade" '

next build
