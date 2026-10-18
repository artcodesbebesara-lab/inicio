# Documentação das Auroras — Índice

Este diretório contém a documentação por pasta para cada uma das 48 auroras (aurora-00 → aurora-47). O objetivo é manter o controle e o histórico por pasta — cada pasta tem um arquivo README.mdx (ou README.md) com metadados, status e notas de versão.

Como usar
- Cada pasta `docs/auroras/aurora-XX/README.mdx` possui um frontmatter com os campos principais e uma seção de notas e checklist para a versão.
- Atualize o campo `status` no frontmatter para controlar a visibilidade (online, maintenance, draft, locked).
- Para alterações de código, abra uma branch `feature/aurora-XX-<breve-descricao>` e envie um Pull Request com o link para o README.mdx afetado.

Padrões de nomenclatura
- Pastas: `aurora-00` ... `aurora-47` (prefixo de dois dígitos para ordenação segura).
- Arquivo de configuração por rota: `aurora-XX.config.json` (quando necessário).

Próximos passos
- Integrar `src/config/auroras.registry.ts` (tipado em TypeScript) como source-of-truth para as rotas usadas pelo servidor/front.
- Centralizar decisões importantes em `docs/DECISIONS.md` (ainda por criar).
