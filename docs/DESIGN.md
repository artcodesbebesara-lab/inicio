# Design & Resumo — Aurora (início)

Paleta (número → nome → hex):
- 01 Ciano — #22d3ee
- 02 Âmbar — #fbbf24
- 03 Verde-limão — #a3e635
- 04 Azul-céu — #38bdf8
- 05 Laranja — #fb923c
- 06 Branco — #e5e7eb
- 07 Violeta — #a855f7
- 08 Rosa — #f472b6
- 09 Verde-esmeralda — #34d399
- 10 Âmbar-escuro — #d97706
- 11 Azul-noite — #1e3a8a
- 12 Preto-suave — #0a0a0a

Mapeamento de cores em coresets (cores → coresets / elementos):
- aurora-core-00 (nave mãe) — elemento: ar (ícone: icon-ar.svg)
- aurora-core-01 — elemento: terra (ícone: icon-terra.svg) — aurora-01..04
- aurora-core-02 — elemento: água (ícone: icon-agua.svg) — aurora-05..08
- aurora-core-03 — elemento: fogo (ícone: icon-fogo.svg) — aurora-09..12

Banners:
- Cada landing tem um banner SVG simples com o fundo na cor do aurora e texto de título/subtítulo. Esses são placeholders para iteração visual posterior.

Tipografia & iconografia (sugestão inicial):
- Tipografia: Inter (ou system-ui) para corpo e títulos, pesos: 600/700 para títulos, 400/500 para corpo.
- Iconografia: ícones simples em SVG, estilo flat, um por core (terra/água/fogo/ar). Ícones já adicionados em /docs/assets/icons.

Resumo (texto inicial — rascunho):

Este repositório contém a versão inicial das 13 landings (1 nave mãe + 12 naves agrupadas) — cada landing é uma página estática pronta para demonstrar o visual e o CTA de passagem para a próxima etapa (Next.js / API). O objetivo aqui é 'dormir' o design — criar um rascunho que possa ser lapidado em iterações antes do lançamento oficial. Mantenha este conjunto público para acesso por stakeholders; o conteúdo é um protótipo, sujeito a revisões.

Notas para evolução:
- Iterar os banners com imagens reais ou ilustrações.
- Definir tipografia licenciada (se necessário) e aplicar tokens de design (cores, espaçamentos, escala).
- Implementar capturas de lead reais (API .NET) e rotas Next.js quando for a hora da integração.

Próximos passos possíveis (eu posso executar):
- Subir variações visuais dos banners (PNG/WebP) e substituir SVGs por arte final.
- Criar o esqueleto Next.js e o esqueleto da API C# .NET 8 no monorepo.
- Configurar GitHub Pages (pasta /docs) para gerar URLs públicas automaticamente.

Rascunho aberto — revisar e commitar versões sucessivas com mensagens claras: "docs: ajustar banner aurora-03", etc.
