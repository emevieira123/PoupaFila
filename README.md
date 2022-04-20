# `PoupaFila` Este é um projeto [Next.js](https://nextjs.org/) inicializado com [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instruções para rodar o projeto localmente.

Para rodar o projeto, é **necessário** ter instalado em sua máquina:

- [Node .js](https://nodejs.org/en/) (Versão LTS)
- [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install) (Usar **NPM** pode gerar conflitos no gerenciamento de dependências)

Após essas instalações, dentro da pasta do projeto execute:

```bash
yarn && yarn dev
# ou
npm && npm run dev
```

Todas as dependências serão instaladas e o projeto será iniciado logo em seguida.

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

### ESLint & Prettier

Dentro dos pacotes do projeto, existem arquivos de configurações para o VSCode com o objetivo de padronizar a escrita de código dentro do projeto. Para isso, é necessário ter seguintes extensões
instaladas em seu VSCode:

- ESLint
- EditorConfig for VS Code
- Prettier

Os arquivos `.eslintrc.(js e json)` e `.editorconfig` possuem configurações pré-estabelecidas para o VSCode, para que ao encontrar erros de padrões de código, ele tente corrigir ao usar `(cmd+s ou ctrl+s)` para salvar as alterações.<br />
Caso ainda existam erros, ele irá informar na própria linha quais são eles.

### Comandos

#### `yarn dev`

Roda o projeto em modo de desenvolvimento na url: <br />[http://localhost:3000](http://localhost:3000)<br />

> Qualquer alteração realizada nos arquivos, irá causar um reload automático na página

### projeto em desenvolvimento...
