# Event Platform
> Plataforma de eventos online.

## Overview
Plataforma de eventos e/ou aulas online, onde é possível se inscrever e acessar conteúdos com vídeo, títulos, descrição, desafio, informações do professor e alguns links úteis. Os conteúdos se tornam disponíveis para acesso conforme suas datas de disponibilidade, assim permitindo o cadastro de todos os conteúdos do evento com antecedência pelo administrador.

### Features
- Inscrição na Plataforma/Evento
- Exibição de todos os conteúdos cadastrados
- Acesso aos conteúdos disponíveis
  - Player de vídeo
  - Desafio
  - Outras informações

### Technologies
A aplicação foi desenvolvida utilizando React com [Vite](https://vitejs.dev/), escrita com Typescript, estilizada com [Tailwind CSS](https://tailwindcss.com/) e para lidar com a API foi utilizado [Apollo](https://www.apollographql.com/) e [GraphQL Code Generator](https://www.graphql-code-generator.com/).

Já para o back-end da aplicação e gerencimaneto dos conteúdos foi utilizado a ferramenta online [GraphCMS](https://app.graphcms.com/), um *headless CMS*, que fornece uma API GraphQL.

## Next Level
- [X] Component de rodapé.
- [X] Componente de conteúdo não encontrado.
- [X] Componente de carregamento.
- [ ] Responsividade.
- [ ] Página de Login e autenticação de usuário.
