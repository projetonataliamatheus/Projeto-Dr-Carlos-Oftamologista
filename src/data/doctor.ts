/**
 * Fonte única de conteúdo da página.
 * Para adaptar a página a outro profissional, edite apenas este arquivo.
 */

export type EducationItem = {
  label: string;
  title: string;
  lines: string[];
};

export type Treatment = {
  title: string;
  description: string;
  image: string;
};

export type Location = {
  name: string;
  address: string;
  mapsUrl: string;
};

export const doctor = {
  prefix: "Dr.",
  firstName: "Carlos Rodrigo Damasceno",
  lastName: "Feitosa de Santana",
  specialty: "Oftalmologista",
  crm: "CRM-SP 269854",
  rqe: "RQE 138773",
  phoneLabel: "+55 (00) 00000.0000",
  whatsappUrl: "https://wa.me/5500000000000",
  lattesUrl: "https://lattes.cnpq.br/",
  heroParagraph:
    "Uma prática construída com estudo e dedicação. O Dr. Carlos Rodrigo Feitosa de Santana é médico oftalmologista, formado pelo Centro Universitário Christus, com trajetória acadêmica e atuação voltadas à Oftalmologia.",
  bioParagraphs: [
    "O Dr. Carlos Rodrigo Feitosa de Santana é médico oftalmologista, formado pelo Centro Universitário Christus, com trajetória acadêmica e atuação voltadas à Oftalmologia.",
    "Sua trajetória inclui participação em congressos, apresentações de casos clínicos e produção científica na área, mantendo uma busca constante por atualização e conhecimento.",
  ],
  quote: {
    before: "Precisão no ",
    highlight1: "cuidado",
    middle: ". Conhecimento em ",
    highlight2: "cada olhar",
    after: ". Saúde ocular com ",
    highlight3: "excelência.",
  },
  education: [
    {
      label: "Graduação - Medicina",
      title: "Centro Universitário Christus",
      lines: ["Formado em 2021."],
    },
    {
      label: "Especialidade",
      title: "Oftalmologia",
      lines: ["Registro de Qualificação de Especialista — RQE 138773."],
    },
    {
      label: "Registro Profissional",
      title: "CRM-SP 269854",
      lines: ["Conselho Regional de Medicina do Estado de São Paulo."],
    },
    {
      label: "Atualização Contínua",
      title: "Congressos e Produção Científica",
      lines: ["Participação em eventos, casos clínicos e trabalhos da área."],
    },
  ] satisfies EducationItem[],
  featured: {
    titleStart: "Olho Seco",
    titleHighlight: "e Tratamentos",
    description:
      "A síndrome do olho seco é uma condição comum que ocorre quando os olhos não produzem lágrimas suficientes ou quando a qualidade das lágrimas é inadequada para manter a lubrificação adequada da superfície ocular.",
    technologiesIntro: "Conheça mais sobre nossas opções de tratamento:",
    technologies: ["Luz Pulsada (IPL)", "Jett Plasma"],
    ctaLabel: "SAIBA MAIS",
    ctaUrl: "#contato",
  },
  locationsTitle: "Atendimento",
  locations: [
    {
      name: "Unidade Principal",
      address: "Nome do edifício, Av. Exemplo, nº 000, 0º andar, Bairro, Cidade UF",
      mapsUrl: "https://maps.google.com/",
    },
    {
      name: "Segunda Unidade",
      address: "Rua Exemplo, nº 000, Centro, Cidade UF",
      mapsUrl: "https://maps.google.com/",
    },
  ] satisfies Location[],
};

export const doctorFullName = `${doctor.prefix} ${doctor.firstName} ${doctor.lastName}`;
export const registration = `${doctor.crm} - ${doctor.rqe}`;