export type Experience = {
  id: string;
  title: string;
  guide: string;
  guideId: string;
  city: string;
  state: string;
  fish: string;
  type: string;
  price: number;
  rating: number;
  reviews: number;
  duration: string;
  capacity: string;
  image: string;
  premium?: boolean;
};

export const experiences: Experience[] = [
  {
    id: "pantanal-dourado",
    title: "Dourado no Pantanal com barco completo",
    guide: "João Arantes",
    guideId: "joao-arantes",
    city: "Corumbá",
    state: "MS",
    fish: "Dourado",
    type: "Arremesso",
    price: 1450,
    rating: 4.9,
    reviews: 128,
    duration: "8 horas",
    capacity: "até 3 pessoas",
    premium: true,
    image: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "amazonia-tucunare",
    title: "Tucunaré amazônico em operação all inclusive",
    guide: "Marina Costa",
    guideId: "marina-costa",
    city: "Barcelos",
    state: "AM",
    fish: "Tucunaré",
    type: "Isca artificial",
    price: 2890,
    rating: 4.8,
    reviews: 92,
    duration: "2 dias",
    capacity: "até 4 pessoas",
    premium: true,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "ilhabela-costeira",
    title: "Pesca costeira para iniciantes no litoral norte",
    guide: "Caio Mendes",
    guideId: "caio-mendes",
    city: "Ilhabela",
    state: "SP",
    fish: "Robalo",
    type: "Costeira",
    price: 690,
    rating: 4.7,
    reviews: 64,
    duration: "5 horas",
    capacity: "até 5 pessoas",
    image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?auto=format&fit=crop&w=1200&q=85"
  }
];

export const publicPages = [
  "Landing page",
  "Login",
  "Cadastro do pescador",
  "Cadastro do guia",
  "Busca",
  "Experiência",
  "Perfil público do guia",
  "Reservas",
  "Chat",
  "Avaliações"
];

export const anglerPages = [
  "Home do pescador",
  "Busca com filtros",
  "Favoritos",
  "Minhas reservas",
  "Detalhe da reserva",
  "Chat com guia",
  "Avaliações",
  "Perfil",
  "Pagamentos",
  "Suporte"
];

export const guidePages = [
  "Dashboard",
  "Criar pescaria",
  "Editar pescaria",
  "Agenda",
  "Reservas recebidas",
  "Mensagens",
  "Financeiro",
  "Avaliações recebidas",
  "Perfil do guia",
  "Plano premium"
];

export const adminPages = [
  "Dashboard administrativo",
  "Aprovação de guias",
  "Aprovação de experiências",
  "Gestão de usuários",
  "Gestão de reservas",
  "Gestão de pagamentos",
  "Moderação de avaliações",
  "Suporte/disputas",
  "Cupons",
  "Métricas"
];
