import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

// Default Clinic Settings
export const defaultClinicSettings = {
  clinic_name: "Green Smile",
  slogan: "Clínica Odontológica Jabaquara",
  average_rating: 4.9,
  total_patients: "2.000+",
  whatsapp: "5511970604418",
  phone: "(11) 97060-4418",
  email: "contato@greensmile.com.br",
  address: "Av. Eng. Armando de Arruda Pereira, 2357",
  neighborhood: "Jabaquara",
  city: "São Paulo - SP, 04309-011",
  working_hours: "Seg a Sex: 9h às 19h\nSáb: 9h às 14h",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  current_month_agenda: "Agenda do mês aberta",
  about_text: "A Green Smile é referência em odontologia estética e reabilitação oral no Jabaquara, com infraestrutura moderna e atendimento humanizado.",
  google_maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.764835691062!2d-46.6433297!3d-23.6485806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b1f9b3b8e7b%3A0x1b4b1a4a4b4b4b4b!2sAv.%20Eng.%20Armando%20de%20Arruda%20Pereira%2C%202357%20-%20Jabaquara%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1pt-BR!2sbr"
};

// Default Services
export const defaultServices = [
  { 
    id: "1",
    name: "Prótese Protocolo Com Implantes", 
    short_description: "Recupere todos os dentes fixos sobre implantes com máxima segurança e conforto.",
    long_description: "A Prótese Protocolo com Implantes é a solução definitiva para quem perdeu todos ou a maioria dos dentes. Fixada sobre implantes de titânio, devolve a mastigação firme, a estética natural e a confiança de um sorriso perfeito.",
    benefits: ["Fixação total e segurança", "Mastigação e fala 100% naturais", "Aparência de dentes naturais", "Resultado permanente"],
    average_duration: "3 a 6 meses",
    target_audience: "Pessoas que perderam grande parte ou todos os dentes e buscam uma prótese fixa definitiva.",
    icon: "Sparkles",
    is_featured: true,
    order: 1
  },
  { 
    id: "2",
    name: "Implantes Dentários", 
    short_description: "Recupere dentes perdidos com implantes de última geração.",
    long_description: "Os implantes dentários são a solução mais moderna e duradoura para substituir dentes perdidos. Utilizamos tecnologia de ponta para garantir resultados naturais e funcionais.",
    benefits: ["Solução permanente", "Aparência natural", "Preserva o osso da mandíbula", "Permite mastigação normal"],
    average_duration: "3 a 6 meses",
    target_audience: "Pessoas que perderam um ou mais dentes e buscam uma solução definitiva.",
    icon: "CircleDot",
    is_featured: true,
    order: 2
  },
  { 
    id: "3",
    name: "Lentes de Contato Dental", 
    short_description: "Transforme seu sorriso com facetas ultrafinas e naturais.",
    long_description: "As lentes de contato dental são facetas ultrafinas de porcelana que cobrem a parte frontal dos dentes, corrigindo cor, forma e tamanho para um sorriso harmonioso.",
    benefits: ["Resultado imediato", "Desgaste mínimo do dente", "Alta durabilidade", "Aparência muito natural"],
    average_duration: "2 a 3 sessões",
    target_audience: "Quem deseja melhorar a estética do sorriso de forma rápida e duradoura.",
    icon: "Smile",
    is_featured: true,
    order: 3
  },
  { 
    id: "4",
    name: "Clareamento Dental", 
    short_description: "Dentes mais brancos de forma segura e duradoura.",
    long_description: "Oferecemos clareamento dental com laser e também kits para uso domiciliar, sempre com acompanhamento profissional para garantir resultados seguros e duradouros.",
    benefits: ["Resultado visível na primeira sessão", "Seguro para o esmalte", "Tratamento personalizado", "Duração de até 2 anos"],
    average_duration: "1 a 3 sessões",
    target_audience: "Pessoas com dentes amarelados ou manchados que desejam um sorriso mais branco.",
    icon: "Sun",
    is_featured: true,
    order: 4
  },
  { 
    id: "5",
    name: "Ortodontia", 
    short_description: "Correção de mordida e alinhamento dentário para todas as idades.",
    long_description: "Tratamentos ortodônticos completos para correção de mordida, alinhamento dental e problemas de oclusão, utilizando técnicas modernas e aparelhos de última geração.",
    benefits: ["Melhora da mordida", "Alinhamento perfeito", "Opções estéticas disponíveis", "Planejamento digital"],
    average_duration: "18 a 36 meses",
    target_audience: "Crianças, adolescentes e adultos com problemas de alinhamento ou mordida.",
    icon: "Layers",
    is_featured: true,
    order: 5
  },
  { 
    id: "6",
    name: "Reabilitação Oral", 
    short_description: "Tratamento completo para devolver função e estética ao seu sorriso.",
    long_description: "A reabilitação oral é um tratamento completo que combina diversas especialidades para restaurar a função mastigatória, estética e saúde bucal.",
    benefits: ["Tratamento personalizado", "Abordagem multidisciplinar", "Melhora da mastigação", "Recuperação da autoestima"],
    average_duration: "Varia conforme o caso",
    target_audience: "Pacientes com múltiplos problemas bucais que precisam de tratamento integrado.",
    icon: "Stethoscope",
    is_featured: true,
    order: 6
  }
];

// Default Before/After Cases
export const defaultBeforeAfterCases = [
  {
    id: "1",
    category: "Invisalign",
    before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80",
    description: "Correção de apinhamento com Invisalign em 12 meses",
    order: 1
  },
  {
    id: "2",
    category: "Implantes",
    before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80",
    description: "Reabilitação com implantes e prótese fixa",
    order: 2
  },
  {
    id: "3",
    category: "Estética",
    before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80",
    description: "Lentes de contato dental para harmonização do sorriso",
    order: 3
  },
  {
    id: "4",
    category: "Clareamento",
    before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80",
    description: "Clareamento a laser com resultado imediato",
    order: 4
  }
];

// Default Testimonials
export const defaultTestimonials = [
  {
    id: "1",
    name: "Lulu",
    rating: 5,
    text: "Minha experiência foi excelente! Sempre fui muito bem atendida, e o resultado superou minhas expectativas. Meus dentes ficaram maravilhosos! Obrigado Dr. Victor.",
    source: "Google",
    service: "Avaliação Geral",
    order: 1
  },
  {
    id: "2",
    name: "Douglas",
    rating: 5,
    text: "Ótimo lugar com ambiente limpo e agradável. Fui atendido pelo dentista Victor, onde realizei o procedimento de lentes de contato. Trabalho excelente e super acessível da região, além de ter tido todo o suporte de dúvidas no pós. Super recomendo!",
    source: "Google",
    service: "Lentes de Contato",
    order: 2
  },
  {
    id: "3",
    name: "Rubia",
    rating: 5,
    text: "Quero parabenizar o atendimento do dentista dr Victor, fiz meu canal com ele e fiquei muito satisfeita, ficou ótimo, agora estou aguardando minha prótese nova. Médico maravilhoso, trabalha com humanização e profissionalismo com os pacientes além do carinho nos atendimentos! Super indico!!",
    source: "Google",
    service: "Tratamento de Canal",
    order: 3
  },
  {
    id: "4",
    name: "Cida",
    rating: 5,
    text: "Quebrei meu dente da frente e precisei de uma restauração com urgência. Fui atendido pelo doutor Victor, que fez um trabalho excelente, com muito cuidado e atenção. Além do ótimo atendimento, a clínica é muito agradável. Fiquei muito satisfeta com o resultado e com certeza voltarei mais vezes.",
    source: "Google",
    service: "Restauração de Urgência",
    order: 4
  },
  {
    id: "5",
    name: "Gilvanete",
    rating: 5,
    text: "Há 05 dias fiz lentes de resina na green smile ótima clinica, o Trabalho dó Dr. Superou minhas expectativas, tinha dentes pequenos e amarelos, ficaram perfeito lindos , super indico Parabéns a Clinica Green Smile pela profissionalismo e atendimento",
    source: "Google",
    service: "Lentes de Resina",
    order: 5
  }
];

// Default FAQs
export const defaultFAQs = [
  {
    id: "1",
    question: "O tratamento com Invisalign dói?",
    answer: "O Invisalign é muito confortável! Pode haver um leve desconforto nos primeiros dias de cada alinhador, mas é muito menor que o aparelho tradicional. A maioria dos pacientes se adapta rapidamente.",
    order: 1
  },
  {
    id: "2",
    question: "Quanto tempo dura um implante dentário?",
    answer: "Com os cuidados adequados, um implante pode durar a vida toda. A taxa de sucesso é superior a 95%. Fazemos acompanhamento regular para garantir a longevidade do seu implante.",
    order: 2
  },
  {
    id: "3",
    question: "Quais formas de pagamento vocês aceitam?",
    answer: "Aceitamos cartão de crédito (em até 12x), débito, PIX e boleto. Também trabalhamos com financiamento odontológico para tratamentos de maior valor. Consulte nossas condições especiais.",
    order: 3
  },
  {
    id: "4",
    question: "Como é a primeira consulta?",
    answer: "A primeira consulta é uma avaliação completa onde fazemos exame clínico, radiografias (se necessário) e conversamos sobre suas expectativas. Apresentamos um plano de tratamento personalizado sem compromisso.",
    order: 4
  }
];

const mockEntities = {
  ClinicSettings: {
    list: async () => [defaultClinicSettings],
    get: async () => defaultClinicSettings,
    create: async (data) => data,
    update: async (id, data) => data,
    delete: async () => true,
  },
  Service: {
    list: async () => defaultServices,
    get: async (id) => defaultServices.find(s => s.id === id) || defaultServices[0],
    create: async (data) => data,
    update: async (id, data) => data,
    delete: async () => true,
  },
  BeforeAfterCase: {
    list: async () => defaultBeforeAfterCases,
    get: async (id) => defaultBeforeAfterCases.find(c => c.id === id) || defaultBeforeAfterCases[0],
    create: async (data) => data,
    update: async (id, data) => data,
    delete: async () => true,
  },
  Testimonial: {
    list: async () => defaultTestimonials,
    get: async (id) => defaultTestimonials.find(t => t.id === id) || defaultTestimonials[0],
    create: async (data) => data,
    update: async (id, data) => data,
    delete: async () => true,
  },
  FAQ: {
    list: async () => defaultFAQs,
    get: async (id) => defaultFAQs.find(f => f.id === id) || defaultFAQs[0],
    create: async (data) => data,
    update: async (id, data) => data,
    delete: async () => true,
  },
  Lead: {
    list: async () => [],
    get: async () => null,
    create: async (data) => {
      try {
        const stored = JSON.parse(localStorage.getItem('green_smile_leads') || '[]');
        stored.push({ ...data, created_at: new Date().toISOString() });
        localStorage.setItem('green_smile_leads', JSON.stringify(stored));
      } catch {
        // ignore
      }
      return { id: Date.now().toString(), ...data };
    },
    update: async (id, data) => data,
    delete: async () => true,
  },
  GalleryImage: {
    list: async () => [],
    get: async () => null,
    create: async (data) => data,
    update: async (id, data) => data,
    delete: async () => true,
  },
  TeamMember: {
    list: async () => [],
    get: async () => null,
    create: async (data) => data,
    update: async (id, data) => data,
    delete: async () => true,
  }
};

const entityProxyHandler = {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return {
      list: async () => [],
      get: async () => null,
      create: async (data) => data,
      update: async (id, data) => data,
      delete: async () => true,
    };
  }
};

let baseClient;
try {
  baseClient = createClient({
    appId,
    token,
    functionsVersion,
    serverUrl: '',
    requiresAuth: false,
    appBaseUrl
  });
} catch {
  baseClient = {
    auth: {
      me: async () => null,
      logout: () => {},
      redirectToLogin: () => {}
    },
    appLogs: {
      logUserInApp: async () => {}
    }
  };
}

export const apiClient = {
  ...baseClient,
  auth: {
    me: async () => null,
    logout: () => {},
    redirectToLogin: () => {},
    ...(baseClient?.auth || {})
  },
  appLogs: {
    logUserInApp: async () => {},
    ...(baseClient?.appLogs || {})
  },
  entities: new Proxy(mockEntities, entityProxyHandler)
};

export const greenSmileClient = apiClient;
export const base44 = apiClient;
