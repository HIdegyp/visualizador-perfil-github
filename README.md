# 🌐 Visualizador de Perfil do GitHub

Um pequeno aplicativo web que permite buscar perfis do GitHub e exibir informações básicas do usuário e seus repositórios.

## ✨ Funcionalidades

- 🔎 Busca por nome de usuário do GitHub
- 🖼️ Exibe avatar, nome, bio, seguidores e seguindo
- 📦 Mostra até 10 repositórios do usuário
- ⏎ Pesquisa clicando em "Buscar" ou pressionando Enter
- ⚠️ Trata casos de usuário não encontrado

## ⚙️ Como funciona

O app usa a API pública do GitHub com dois endpoints principais:

- Buscar perfil do usuário:
  - `GET https://api.github.com/users/:username`
- Buscar repositórios do usuário:
  - `GET https://api.github.com/users/:username/repos?per_page=10&sort=created`

## 📁 Estrutura do projeto

- `index.html` — layout da página
- `src/css/` — estilos do projeto
- `js/githubApi.js` — funções para chamar a API do GitHub
- `js/profileView.js` — função para mostrar o resultado na tela
- `js/index.js` — lógica de evento de busca e interação com o usuário

## 🚀 Como usar

1. Abra `index.html` em um navegador moderno.
2. Digite o nome de usuário do GitHub no campo de busca.
3. Clique em "Buscar" ou pressione Enter.
4. O resultado aparece na área de perfil.

## 💡 Melhorias possíveis

- adicionar paginação para mostrar mais repositórios
- exibir links diretos para o GitHub
- mostrar mais informações do usuário (localização, empresa, número de seguidores)
- melhorar o visual de mensagens de erro e carregamento

## 📝 Observações

- Não é necessário servidor local para usar o projeto; basta abrir o arquivo `index.html`.
- A API do GitHub tem limites de requisição para clientes anônimos, então use com moderação.
