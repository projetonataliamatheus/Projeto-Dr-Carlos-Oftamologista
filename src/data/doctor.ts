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
  firstName: "Carlos Rodrigo",
  lastName: "Feitosa",
  specialty: "Oftalmologista",
  crm: "CRM-SP 269854",
  rqe: "RQE 138773",
  phoneLabel: "(19) 3251-1718",
  whatsappUrl: "https://wa.me/551932511718",
  lattesUrl: "https://lattes.cnpq.br/",
  heroParagraph:
    "Uma prática construída com estudo e dedicação. O Dr. Carlos Rodrigo Feitosa é médico oftalmologista, formado pelo Centro Universitário Christus, com trajetória acadêmica e atuação voltadas à Oftalmologia.",
  bioParagraphs: [
    "O Dr. Carlos Rodrigo Feitosa é médico oftalmologista, formado pelo Centro Universitário Christus, com trajetória acadêmica e atuação voltadas à Oftalmologia.",
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
  locationsTitle: "Onde Atendemos",
  locations: [
    {
      name: "Med Olhos Campinas",
      address: "R. Dr. Souza Lima, 45 - Cambuí, Campinas - SP, 13025-280",
      mapsUrl: "https://www.google.com/maps/place/Med+Olhos+Campinas/@-22.8986221,-47.0506371,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8c8ad664f3d1b:0x5e0f9b6b6c0b0b0b!8m2!3d-22.8986221!4d-47.0506371!16s%2Fg%2F11b6x5w4h5?entry=ttu",
    },
  ] satisfies Location[],
};

export const doctorFullName = `${doctor.prefix} ${doctor.firstName} ${doctor.lastName}`;
export const registration = `${doctor.crm} - ${doctor.rqe}`;