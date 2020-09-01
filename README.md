<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/gustavogf/decode-internet-pela-educacao">
    <img src="media/Logo_Internet_pela_Educacao_icon_1.png" alt="Logo" width="200" height="130">
  </a>

  <h3 align="center">Internet Pela educação!</h3>
  <h3 align="center">Hackday - Grupo Decode</h3>

  <p align="center">
    Em 24 horas, mudamos a educação!
  </p>
</p>

## Membros
* André Custódio
* Augusto Queirantes
* Gustavo Guimarães
* Pedro Adas

<!-- TABLE OF CONTENTS -->
## Sumário

* [Sobre o projeto](#sobre-o-projeto)
  * [Tecnolgias Utilizadas](#tecnologias-utilizadas)
* [Utilizando o projeto](#utilizando-o-projeto)
  * [Pré requistos](#pré-requistos)
  * [Rodando localmente](#rodando-localmente)

<!-- SOBRE O PROJETO -->
## Sobre o projeto
<p>
  O desafio da hackday foi: <br>
  Desenvolver a melhor ideia para o <a href="https://internetpelaeducacao.com.br/">novo manifesto</a> da Quero Educação. <br>

  Os principais requisitos eram:
  <ul style="list-style-type:square">
    <li> Utilização da identidade de marca do Internet Pela Educação, seguindo os diretrizes da marca. </li>
    <li> Considerar que o usuário tem problemas de acesso à internet. </li>
    <li> CTA para a pessoa ler o documento do manifesto completo. </li>
    <li> CTA para quem quiser escrever um depoimento. </li>
    <li> Contabilizar as pessoas que assinaram corretamente. </li>
    <li> Contabilizar as pessoas que assinaram corretamente. </li>
    <li> Ter espaço para vídeos ou texto de depoimento de alunos dizendo como é difícil acompanhar os estudos sem internet. </li>
    <li> Ter o nome dos integrantes do squad. </li>
  </ul>
</p>

### Tecnologias utilizadas
* HTML e CSS
* Firebase - [Documentação](https://firebase.google.com/docs/)
* JavaScript
* Netlify

<!-- Utilização -->
## Utilizando o projeto!

<p> Aqui veremos como utilizar o projeto e subir localmente! </p>

### Pré requistos

### Rodando localmente

1. Crie um projeto no [Firebase](https://firebase.google.com/products/firestore?hl=pt)
2. Clone o repositório:
```sh
git clone https://github.com/gustavogf/decode-internet-pela-educacao.git
```
3. Caso utilize a IDE VsCode, baixe o plugin `Open in Default Browser`. Ele permite que o projeto possa ser visualizado localmente.
4. Dentro do projeto Firebase, vá em configurações do projeto (no botão com formato de engrenagem) e copie e cole sua chave de API no arquivo `firebase.js`. Faça o mesmo com o ID do projeto.
```JS
firebase.initializeApp({
  apiKey: 'API-KEY',
  authDomain: 'id-do-projeto.firebaseapp.com',
  projectId: 'id-do-projeto'
});
```
5. Clique com o botão direito em `index.html` e selecione "Open in default Browser". Pronto, o projeto será aberto localmente em seu navegador!
