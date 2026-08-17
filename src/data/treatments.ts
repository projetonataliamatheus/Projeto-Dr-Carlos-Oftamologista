import t1 from "@/assets/treatments/olho-seco-v2.png";
import t2 from "@/assets/treatments/treatment-refrativa.png";
import t3 from "@/assets/treatments/ceratocone-v2.png";
import t4 from "@/assets/treatments/treatment-crosslinking.png";
import t5 from "@/assets/treatments/treatment-lentes.png";
import t6 from "@/assets/treatments/treatment-catarata.jpeg";
import t7 from "@/assets/treatments/treatment-pterigio.jpeg";
import t8 from "@/assets/treatments/treatment-transplante.png";
import type { Treatment } from "./doctor";

export const treatments: Treatment[] = [
  {
    title: "Tratamento com Luz Pulsada para Olho Seco",
    description:
      "A Luz Pulsada é uma alternativa terapêutica utilizada no tratamento do olho seco, auxiliando no funcionamento das glândulas de Meibômio e contribuindo para uma melhor qualidade da lágrima e maior conforto ocular.",
    image: t1,
  },
  {
    title: "Cirurgia Refrativa",
    description:
      "Procedimento realizado para corrigir alterações da refração, como miopia, hipermetropia e astigmatismo, podendo reduzir a necessidade do uso de óculos ou lentes de contato.",
    image: t2,
  },
  {
    title: "Tratamento de Ceratocone",
    description:
      "O tratamento do ceratocone é definido de forma individualizada, de acordo com o estágio da doença, podendo incluir lentes de contato especiais, implante de anel intracorneano e técnicas para estabilização da córnea.",
    image: t3,
  },
  {
    title: "Crosslinking Corneano",
    description:
      "Procedimento desenvolvido para aumentar a resistência e estabilidade da córnea, sendo especialmente indicado para casos de ceratocone e outras condições associadas ao afinamento corneano.",
    image: t4,
  },
  {
    title: "Adaptação de Lentes de Contato Rígidas, Tóricas e Gelatinosas",
    description:
      "Processo personalizado de escolha e adaptação das lentes de contato, considerando as características dos olhos de cada paciente para proporcionar boa correção visual, conforto e segurança.",
    image: t5,
  },
  {
    title: "Cirurgia de Catarata com Implante de Lente",
    description:
      "Procedimento realizado para tratar a catarata, removendo o cristalino opacificado e substituindo-o por uma lente intraocular, com o objetivo de recuperar a qualidade da visão.",
    image: t6,
  },
  {
    title: "Cirurgia de Pterígio com Cola",
    description:
      "Técnica cirúrgica moderna para a remoção do pterígio, utilizando cola biológica para auxiliar na fixação do tecido e proporcionar uma abordagem mais delicada e menos invasiva.",
    image: t7,
  },
  {
    title: "Transplante de Córnea",
    description:
      "O transplante de córnea é um procedimento cirúrgico que substitui a córnea comprometida por um tecido saudável, buscando restaurar a qualidade visual e a função ocular em casos de doenças, lesões ou cicatrizes corneanas.",
    image: t8,
  },
];