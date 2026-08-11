import t1 from "@/assets/treatment-1.jpg";
import t2 from "@/assets/treatment-2.jpg";
import t3 from "@/assets/treatment-3.jpg";
import t4 from "@/assets/treatment-4.jpg";
import t5 from "@/assets/treatment-5.jpg";
import t6 from "@/assets/treatment-6.jpg";
import t7 from "@/assets/treatment-7.jpg";
import t8 from "@/assets/treatment-8.jpg";
import type { Treatment } from "./doctor";

export const treatments: Treatment[] = [
  {
    title: "Olho Seco",
    description:
      "Abordagem inovadora e não invasiva que alivia os sintomas e estimula a recuperação natural dos tecidos, com sessões rápidas e confortáveis.",
    image: t1,
  },
  {
    title: "Cirurgia Refrativa",
    description:
      "Procedimento planejado para corrigir alterações funcionais, reduzindo a dependência de recursos externos e devolvendo autonomia ao paciente.",
    image: t2,
  },
  {
    title: "Tratamento de Ceratocone",
    description:
      "Exames de alta precisão que permitem identificar a condição no estágio inicial e definir o plano terapêutico mais adequado para cada caso.",
    image: t3,
  },
  {
    title: "Crosslinking Corneano",
    description:
      "Técnica moderna que fortalece e preserva a estrutura tratada, com recuperação rápida e menor desconforto no pós-procedimento.",
    image: t4,
  },
  {
    title: "Adaptação de Lentes de Contato Rígidas, Tóricas e Gelatinosas",
    description:
      "Processo individualizado de adaptação e acompanhamento clínico, visando o máximo de conforto e o melhor resultado funcional possível.",
    image: t5,
  },
  {
    title: "Cirurgia de Catarata com Implante de Lente",
    description:
      "Procedimento seguro e eficaz realizado em centro cirúrgico equipado com tecnologia de ponta e equipe especializada.",
    image: t6,
  },
  {
    title: "Cirurgia de Pterígio com Cola",
    description:
      "Uso de dispositivos de última geração selecionados de acordo com as necessidades e o estilo de vida de cada paciente.",
    image: t7,
  },
  {
    title: "Transplante de Córnea",
    description:
      "Programa de cuidado contínuo focado em manter os resultados alcançados e prevenir recidivas ao longo dos anos.",
    image: t8,
  },
];