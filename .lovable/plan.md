# Clone da página da Dra. Régia Sobral (template para outro médico)

## Situação dos anexos e links

- Blueprint (PDF/DOCX): lido por completo — paleta, tipografia, geometria e estrutura seção por seção estão mapeados.
- Página ao vivo `draregiasobral.com.br`: capturada (conteúdo + screenshot). É a fonte de fidelidade visual.
- Pasta do Google Drive: **não acessível** (link restrito). Não consegui abrir pastas, imagens nem códigos.
- Link do artefato Claude com os dados do novo Dr.: **retorna "Page not found"** sem login. Não consegui extrair nome, fotos ou textos.

Por isso a primeira versão será construída como **template fiel com placeholders neutros**, pronta para receber os dados reais assim que você anexar os arquivos aqui no chat (ou liberar o Drive como "qualquer pessoa com o link").

## Design system (fiel ao original)

- Fundo: off-white `#FDFBF7` / `#F8F5EE`
- Cards e blocos: bege taupe `#E6DFD5` → `#B79B7E` (bloco de formação em taupe escuro)
- CTA / acento: bronze `#B58D63`, hover `#9C7550`
- Texto: espresso `#2C2A29` / `#3A3532`
- Tipografia sans-serif geométrica (Poppins/Plus Jakarta), títulos com dois pesos na mesma linha ("Dra. **Nome**", "Formação **Médica**"), tracking largo em labels (MESTRADO • ...)
- Raio 24–32px em containers, botões em pílula, monograma decorativo ao fundo do hero
- Efeitos: fade-in/slide-up ao rolar, hover suave em botões e cards, WhatsApp flutuante com pulso

## Estrutura da página (`/`)

1. **Hero** — 2 colunas: esquerda com nome (H1), CRM/RQE em bronze, parágrafo com barra lateral, botão pílula "AGENDE SUA CONSULTA" com ícone de seta e moldura de linha bronze arredondada; direita com foto recortada do médico sobre o monograma decorativo.
2. **Formação Médica** — container taupe arredondado; coluna esquerda com título, especialidade + CRM/RQE, biografia e botão secundário "CURRÍCULO LATTES"; coluna direita com timeline (marcadores + linha vertical): Mestrado, Fellowship, Residência Médica, Graduação.
3. **Faixa de citação** — frase centralizada com destaques em peso maior ("Cuidar da **sua visão**...").
4. **Condição principal + Tratamentos** — bloco de destaque com texto, tecnologias e botão "SAIBA MAIS"; título "Mais Tratamentos" e grid responsivo de 8 cards (imagem, título, descrição) com hover.
5. **CTA final + Localização** — marca, botão "AGENDE SUA CONSULTA", telefone/WhatsApp, duas unidades de atendimento com endereço e link para o Google Maps.
6. **Rodapé** — linha institucional "© Nome | Todos os direitos reservados." e widget fixo de WhatsApp no canto inferior direito com animação de pulso.

## Conteúdo dos placeholders

Um único arquivo de configuração (`src/data/doctor.ts`) centraliza: nome, especialidade, CRM/RQE, bio, WhatsApp, Lattes, timeline de formação, lista de tratamentos e endereços. Trocar o médico = editar só esse arquivo.

## Detalhes técnicos

- TanStack Start, rota `/` (substitui o placeholder do template), seções em componentes próprios em `src/components/`.
- Tokens de cor/fonte/sombra em `src/styles.css` (oklch) — sem cores hardcoded nos componentes; variante `hero` no botão.
- Fonte carregada via `<link>` no `__root.tsx`.
- Animações de entrada com IntersectionObserver + utilitários do design system.
- Imagens: retrato do médico e as 8 ilustrações de tratamento geradas no estilo minimalista do original (substituíveis pelas reais depois).
- `head()` da rota `/` com title, description, og e twitter próprios; HTML semântico, H1 único, alt em todas as imagens.

## Próximo passo depois da aprovação

Você anexa aqui no chat as fotos e os dados reais do novo Dr. e eu substituo os placeholders — o layout permanece idêntico.