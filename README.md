<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/gustavogf/decode-internet-pela-educacao">
    <img src="media/Logo_Internet_pela_Educacao_icon_1.png" alt="Logo" width=30% height=30%>
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
  * [Acessando as entradas no banco NoSQL](#acessando-as-entradas-no-banco-NoSQL)

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
    <li> Ser responsivo. </li>
  </ul>
</p>

### Tecnologias utilizadas
* HTML e CSS
* JavaScript
* Firebase - [Documentação](https://firebase.google.com/docs/)
* Netlify - [Documentação](https://docs.netlify.com/)

<!-- Utilização -->
## Utilizando o projeto!

<p> Aqui veremos como utilizar o projeto e subir localmente! </p>

### Pré requistos
* Alguma IDE. Aqui utilizo o VSCode para rodar localmente.
* Conta Google para o projeto firebase.
* Conta Netlify para subir o projeto em rede.

### Rodando localmente

1. Crie um projeto no [Firebase](https://firebase.google.com/products/firestore?hl=pt)
2. Crie um Storage (Desenvolver -> Cloud Firestore)
3. Clone o repositório:
```sh
git clone https://github.com/gustavogf/decode-internet-pela-educacao.git
```
4. Caso utilize a IDE VsCode, baixe o plugin `Open in Default Browser`. Ele permite que o projeto possa ser visualizado localmente.
5. Dentro do projeto Firebase, vá em configurações do projeto (no botão com formato de engrenagem) e copie e cole sua chave de API no arquivo `firebase.js`. Faça o mesmo com o ID do projeto.
```JS
firebase.initializeApp({
  apiKey: 'API-KEY',
  authDomain: 'id-do-projeto.firebaseapp.com',
  projectId: 'id-do-projeto'
});
```
5. Clique com o botão direito em `index.html` e selecione "Open in default Browser". Pronto, o projeto será aberto localmente em seu navegador!

### Acessando as entradas no banco NoSQL
<p>
  Para acessar os dados salvos, como as assinaturas e imagens de patrocinadores, basta seguir o caminho (dentro do Firebase):
  <ol>
    <li> Desenvolver - > Cloud Firestore. </li>
    <li> Acesse a coleção desejável. </li>
    <li> Edite/visualize o documento e seus atributos.</li>
  </ol>
  Para adicionar patrocinadores:
  <ol>
    <li> Crie uma coleção chamada "assets", caso não exista </li>
    <li> Crie um documento para cada patrocinador </li>
    <li> Os atributos são: </li>
    <ol type="a">
      <li>"kind", que deve ser "image", "video" ou "partner" no caso dos parceiros </li>
      <li>"name", nome do documento/parceiro </li>
      <li>"image_url", url da logo do parceiro </li>
      <li>"url", url do site do parceiro, para direcionamento </li>
    </ol>
  </ol>
  O mesmo processo pode ser realizado para os depoimentos, na coleção Testimony. Que recebe o atributo "name" (nome do autor), "testimony" (depoimento) e "approved" que quando true, faz o depoimento aparecer no site.
</p>
