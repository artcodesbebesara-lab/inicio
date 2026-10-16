# Diário de Desenvolvimento

Data: 2026-10-16
Horário (GMT-3): 2026-10-16 (registrado no momento do commit)

Olá — Diário de Desenvolvimentos.

Este repositório registra notas, comandos e um pequeno glossário para quem está começando com Git e GitHub. O objetivo é manter um diário versionado para acompanhar aprendizado e mudanças.

## Inteligência usada no GitHub (atual)

O GitHub fornece ferramentas de assistência por IA, como o GitHub Copilot, que são alimentadas por grandes modelos de linguagem (LLMs). Historicamente, essas soluções se basearam em modelos desenvolvidos pela OpenAI (ex.: Codex, GPT series) e em variantes/ajustes feitos pela Microsoft/GitHub. Elas evoluem com frequência — para detalhes exatos sobre qual modelo está em uso hoje, consulte a documentação oficial do GitHub Copilot ou as notas de lançamento.

## Comandos Git mais utilizados (rápido)

- git clone <url>
  - Clona um repositório remoto para sua máquina.
  - Ex.: git clone https://github.com/usuario/repo.git

- git init
  - Inicia um repositório Git local em uma pasta.

- git status
  - Mostra o estado atual do repositório (arquivos modificados, staged, untracked).

- git add <arquivo|.>
  - Adiciona arquivos à área de stage para o próximo commit.
  - Ex.: git add README.md

- git commit -m "mensagem"
  - Registra um snapshot (commit) com a mensagem indicada.

- git push origin <branch>
  - Envia commits locais para o repositório remoto (origin) na branch especificada.
  - Ex.: git push origin main

- git pull
  - Puxa e integra (fetch + merge) mudanças do remoto para sua branch atual.

- git fetch
  - Baixa referências e objetos do remoto, sem mesclar automaticamente.

- git branch
  - Lista branches locais. `git branch nome-da-branch` cria uma nova branch.

- git checkout <branch>  (ou git switch <branch>)
  - Muda para a branch indicada.

- git merge <branch>
  - Mescla outra branch na branch atual.

- git rebase <branch>
  - Reaplica commits em cima de outra base (use com cuidado).

- git log --oneline --graph --decorate --all
  - Visualiza histórico de commits de forma compacta e gráfica.

- git remote -v
  - Mostra remotes configurados (origin, upstream).

- git stash
  - Guarda alterações temporariamente para limpar a área de trabalho.

- git reset --hard <commit>
  - Restaura o repositório ao estado de um commit (perde mudanças locais não commitadas).

- git diff
  - Mostra diferenças entre commits, branches ou arquivos.

- git tag <nome>
  - Marca um commit com uma tag (útil para releases).

## Glossário (do zero)

- Repositório (repo): local onde o código e seu histórico são armazenados.
- Clone: cópia local de um repositório remoto.
- Commit: registro (snapshot) do estado do seu código com mensagem descritiva.
- Branch: linha independente de desenvolvimento (ex.: main, feature-x). Permite trabalhar em recursos sem afetar a linha principal.
- Merge: ação de unir mudanças de uma branch para outra.
- Pull request (PR): proposta de integração entre branches (normalmente usada para revisão antes de mesclar). No GitHub, PRs são a maneira principal de colaborar.
- Push: enviar commits locais para o repositório remoto.
- Pull: atualizar sua branch local com mudanças do remoto (equivalente a fetch + merge).
- Fork: cópia independente de um repositório remoto (normalmente para trabalhar em contribuições quando não se tem permissão de escrita no original).
- Origin: nome padrão do remote que aponta para o repositório de onde você clonou.
- Upstream: remote do repositório original quando você trabalhou em um fork.
- Staging area / index: área onde você coloca arquivos antes de commitar (usando git add).
- HEAD: ponteiro para o commit atual em que você está trabalhando.

## Por que usar / aprender GitHub?

- Controle de versão: registra cada mudança, permitindo voltar no tempo, comparar e entender o histórico.
- Colaboração: facilita que várias pessoas trabalhem no mesmo projeto (PRs, code review, comentários).
- Integração contínua: GitHub integra-se com CI/CD para automatizar testes e deploys.
- Portfólio e visibilidade: projetos públicos no GitHub servem como currículo técnico.
- Fluxos de trabalho estabelecidos: padrões como git-flow, trunk-based development e revisão por PR escalam bem para equipes.

## Próximos passos e versão deste documento

- Este documento será revisado e versionado: sempre que fizer alterações importantes, crie um commit com mensagem clara (ex.: "docs: atualizar glossário e comandos").
- Se quiser, eu posso adicionar seções sobre fluxo de trabalho (ex.: feature branch + PR), exemplos de CI (GitHub Actions) e templates de PR/issue.

---

Arquivo inicial criado automaticamente: README.md
