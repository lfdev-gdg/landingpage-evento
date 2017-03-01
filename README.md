# Landingpage do Evento do LFDev

Este projeto foi criado com angular/cli [Angular CLI](https://github.com/angular/angular-cli) versão 1.0.0-beta.32.3.

## Instalando o projeto

Para rodar este projeto você precisa ter instalado em sua máquina o **Node.js**, **NPM**, **@angular/cli**

- Clone este repositório `git clone https://github.com/lfdev-gdg/landingpage-evento.git`
- Entre na pasta `cd landingpage-evento`
- Instale as dependências `npm install`
- Rode o servidor de teste `ng serve`

## Configura o Firebase

Você precisa preencher a configuração do firebase com as credenciais do seu projeto disponível no console do firebase.
Esta configuração está no arquivo `firebase.config.ts` que fica na pasta `src/app/shared`:

```
const firebaseConfig = {
    apiKey: "sua api key",
    authDomain: "url do auth",
    databaseURL: "url do banco",
    storageBucket: "url do storage",
    messagingSenderId: "id do FCM"
};
```
