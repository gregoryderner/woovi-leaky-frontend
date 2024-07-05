# Frontend para Woovi Leaky Bucket Challenge

## Desafio Proposto

Este projeto faz parte do desafio Woovi Leaky Bucket Challenge. O objetivo é criar um frontend que simule a iniciação de uma transação Pix. O frontend se comunica com o backend desenvolvido no desafio e depende dele para funcionar corretamente.

O backend foi desenvolvido utilizando Node.js, Koa, e GraphQL, seguindo princípios de Clean Architecture e uma estrutura em camadas. Este frontend foi configurado manualmente sem o uso de geradores como Create React App (CRA).

## Configuração do Projeto

Optei por configurar o projeto React manualmente, utilizando Webpack e Babel. Abaixo estão as instruções para configurar, instalar dependências, e rodar o projeto.

### Estrutura do Projeto

```plain
my-react-app/
│
├── public/
│ └── index.html
│
├── src/
│ ├── index.tsx
│ └── App.tsx
│ └── App.css
│
├── package.json
├── tsconfig.json
├── webpack.config.js
└── .babelrc
```

### Dependências

As dependências principais utilizadas são:

- React
- ReactDOM
- TypeScript
- Webpack
- Babel

```sh
npm install
npm start
```
# woovi-leaky-frontend
