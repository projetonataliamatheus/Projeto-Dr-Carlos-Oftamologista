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
  firstName: "Nome",
  lastName: "Sobrenome",
  specialty: "Médico Especialista",
  crm: "CRM 00000",
  rqe: "RQE 0000",
  phoneLabel: "+55 (00) 00000.0000",
  whatsappUrl: "https://wa.me/5500000000000",
  lattesUrl: "https://lattes.cnpq.br/",
  heroParagraph:
    "Médico especialista com título reconhecido pela sociedade da especialidade e pela Associação Médica Brasileira (AMB). Atuação dedicada ao diagnóstico preciso, tratamentos com tecnologia avançada e acompanhamento próximo de cada paciente.",
  bioParagraphs: [
    "Médico especialista com título pela sociedade da especialidade e pela Associação Médica Brasileira (AMB). Concluiu Fellowship em centro de referência nacional e é Mestre pela universidade onde desenvolveu sua linha de pesquisa. Atua como responsável por serviço hospitalar de referência e preceptor de residência médica.",
    "Principais áreas de atuação: diagnóstico avançado, procedimentos minimamente invasivos, cirurgias de alta complexidade, tratamentos com tecnologia de ponta e acompanhamento clínico contínuo.",
  ],
  quote: {
    before: "Cuidar da ",
    highlight1: "sua saúde",
    middle: " é valorizar sua ",
    highlight2: "qualidade de vida",
    after: " e o futuro do seu ",
    highlight3: "bem-estar.",
  },
  education: [
    {
      label: "Mestrado",
      title: "Área da especialidade (Cidade - UF)",
      lines: [
        "Universidade de referência, Brasil.",
        "Título: linha de pesquisa desenvolvida durante o mestrado, com estudo clínico retrospectivo.",
      ],
    },
    {
      label: "Especialização",
      title: "Fellowship",
      lines: ["Universidade de referência, Brasil.", "Fellowship na subespecialidade de atuação."],
    },
    {
      label: "Especialização",
      title: "Residência Médica",
      lines: ["Universidade federal, Brasil.", "Residência médica na especialidade."],
    },
    {
      label: "Graduação",
      title: "Medicina",
      lines: ["Universidade federal, Brasil."],
    },
  ] satisfies EducationItem[],
  featured: {
    titleStart: "Condição Principal",
    titleHighlight: "e Tratamentos",
    description:
      "Descreva aqui a condição clínica mais procurada no consultório: o que é, por que acontece e como impacta a rotina do paciente. Um parágrafo curto e acolhedor, com linguagem acessível.",
    technologiesIntro: "Conheça mais sobre nossas opções de tratamento:",
    technologies: ["Tecnologia A", "Tecnologia B"],
    ctaLabel: "SAIBA MAIS",
    ctaUrl: "#tratamentos",
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