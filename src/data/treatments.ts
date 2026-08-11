import t1 from "@/assets/treatments/olho-seco.asset.json";
import t2 from "@/assets/treatments/refrativa.asset.json";
import t3 from "@/assets/treatments/ceratocone.asset.json";
import t4 from "@/assets/treatments/crosslinking.asset.json";
import t5 from "@/assets/treatments/lentes.asset.json";
import t6 from "@/assets/treatments/catarata.asset.json";
import t7 from "@/assets/treatments/pterigio.asset.json";
import t8 from "@/assets/treatments/transplante.asset.json";
import type { Treatment } from "./doctor";

export const treatments: Treatment[] = [
  {
    title: "Tratamento com Luz Pulsada para Olho Seco",
    description:
      "A Luz Pulsada é uma alternativa terapêutica utilizada no tratamento do olho seco, auxiliando no funcionamento das glândulas de Meibômio e contribuindo para uma melhor qualidade da lágrima e maior conforto ocular.",
    image: t1.url,
  },
  {
    title: "Cirurgia Refrativa",
    description:
      "Procedimento realizado para corrigir alterações da refração, como miopia, hipermetropia e astigmatismo, podendo reduzir a necessidade do uso de óculos ou lentes de contato.",
    image: t2.url,
  },
  {
    title: "Tratamento de Ceratocone",
    description:
      "O tratamento do ceratocone é definido de forma individualizada, de acordo com o estágio da doença, podendo incluir lentes de contato especiais, implante de anel intracorneano e técnicas para estabilização da córnea.",
    image: t3.url,
  },
  {
    title: "Crosslinking Corneano",
    description:
      "Procedimento desenvolvido para aumentar a resistência e estabilidade da córnea, sendo especialmente indicado para casos de ceratocone e outras condições associadas ao afinamento corneano.",
    image: t4.url,
  },
  {
    title: "Adaptação de Lentes de Contato Rígidas, Tóricas e Gelatinosas",
    description:
      "Processo personalizado de escolha e adaptação das lentes de contato, considerando as características dos olhos de cada paciente para proporcionar boa correção visual, conforto e segurança.",
    image: t5.url,
  },
  {
    title: "Cirurgia de Catarata com Implante de Lente",
    description:
      "Procedimento realizado para tratar a catarata, removendo o cristalino opacificado e substituindo-o por uma lente intraocular, com o objetivo de recuperar a qualidade da visão.",
    image: t6.url,
  },
  {
    title: "Cirurgia de Pterígio com Cola",
    description:
      "Técnica cirúrgica moderna para a remoção do pterígio, utilizando cola biológica para auxiliar na fixação do tecido e proporcionar uma abordagem mais delicada e menos invasiva.",
    image: t7.url,
  },
  {
    title: "Transplante de Córnea",
    description:
      "Procedimento indicado quando a córnea apresenta alterações importantes que comprometem sua função. A técnica substitui a córnea comprometida por tecido corneano saudável de um doador.",
    image: t8.url,
  },
];
