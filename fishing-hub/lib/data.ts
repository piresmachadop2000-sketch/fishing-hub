export type Experience = {
  id: string;
  title: string;
  location: string;
  region: string;
  species: string[];
  type: string;
  price: number;
  rating: number;
  reviews: number;
  duration: string;
  capacity: string;
  guide: string;
  guideId: string;
  image: string;
  badges: string[];
  includes: string[];
  notIncludes: string[];
  description: string;
};

export const experiences: Experience[] = [
  {
    id: 'tucunare-epitacio',
    title: 'Tucunaré Azul em Presidente Epitácio',
    location: 'Presidente Epitácio, SP',
    region: 'Rio Paraná',
    species: ['Tucunaré Azul', 'Corvina', 'Traíra'],
    type: 'Pesca embarcada',
    price: 1450,
    rating: 4.9,
    reviews: 128,
    duration: 'Dia inteiro',
    capacity: 'Até 3 pescadores',
    guide: 'Marcelo Nogueira',
    guideId: 'marcelo-nogueira',
    image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=1200&q=80',
    badges: ['Guia Verificado', 'Top Guia', 'Responde rápido'],
    includes: ['Barco completo', 'Motor elétrico', 'Sonar', 'Iscas artificiais', 'Água e gelo', 'Coletes salva-vidas'],
    notIncludes: ['Transporte até o local', 'Hospedagem', 'Licença de pesca', 'Almoço'],
    description: 'Experiência premium de pesca esportiva de tucunaré azul no Rio Paraná, com guia local experiente, barco preparado e pontos selecionados conforme vento, época e comportamento do peixe.'
  },
  {
    id: 'robalo-bertioga',
    title: 'Robalo com Artificial em Bertioga',
    location: 'Bertioga, SP',
    region: 'Litoral Norte',
    species: ['Robalo Peva', 'Robalo Flexa'],
    type: 'Costeira / mangue',
    price: 980,
    rating: 4.8,
    reviews: 89,
    duration: 'Meio período',
    capacity: 'Até 2 pescadores',
    guide: 'Caio Mendes',
    guideId: 'caio-mendes',
    image: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=1200&q=80',
    badges: ['Guia Verificado', 'Especialista em Robalo'],
    includes: ['Barco', 'Combustível', 'Equipamentos sob consulta', 'Coletes'],
    notIncludes: ['Iscas', 'Hospedagem', 'Alimentação'],
    description: 'Pescaria técnica de robalo com iscas artificiais, ideal para pescadores intermediários que buscam uma experiência próxima de São Paulo.'
  },
  {
    id: 'dourado-pantanal',
    title: 'Dourado no Pantanal Sul',
    location: 'Corumbá, MS',
    region: 'Pantanal',
    species: ['Dourado', 'Pintado', 'Cachara'],
    type: 'Pesca embarcada',
    price: 2200,
    rating: 5.0,
    reviews: 64,
    duration: '2 dias',
    capacity: 'Até 4 pescadores',
    guide: 'João Batista',
    guideId: 'joao-batista',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    badges: ['Experiência Premium', 'Pesca Esportiva'],
    includes: ['Barco', 'Hospedagem parceira', 'Alimentação', 'Iscas naturais', 'Equipamentos de segurança'],
    notIncludes: ['Passagem aérea', 'Transfer aeroporto'],
    description: 'Pacote completo para quem quer viver uma pescaria clássica no Pantanal, com foco em segurança, conservação e alta qualidade de atendimento.'
  }
];

export const guide = {
  id: 'marcelo-nogueira',
  name: 'Marcelo Nogueira',
  location: 'Presidente Epitácio, SP',
  rating: 4.9,
  reviews: 128,
  response: 'Responde em até 12 minutos',
  trips: 312,
  since: '2021',
  bio: 'Guia profissional especializado em tucunaré azul no Rio Paraná. Atua há mais de 12 anos na região, com operação focada em segurança, técnica e experiência premium.',
  specialties: ['Tucunaré Azul', 'Isca artificial', 'Pesca embarcada', 'Iniciantes e avançados'],
  badges: ['Guia Verificado', 'Top Guia', 'Baixa taxa de cancelamento']
};

export const reservations = [
  { id: 'R-1048', title: 'Tucunaré Azul em Presidente Epitácio', date: '18/05/2026', status: 'Confirmada', price: 1450, guide: 'Marcelo Nogueira' },
  { id: 'R-1032', title: 'Robalo com Artificial em Bertioga', date: '02/04/2026', status: 'Concluída', price: 980, guide: 'Caio Mendes' }
];
