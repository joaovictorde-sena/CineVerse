# 🎬 CineVerse

Repositório do projeto: [CineVerse](https://github.com/joaovictorde-sena/CineVerse/tree/main/src)

---

## 📌 Sobre o projeto

O **CineVerse** é uma aplicação que consome dados de uma API de filmes para exibir informações como título, sinopse, avaliação e imagem dos filmes em destaque. O objetivo principal deste projeto foi praticar consumo de API REST, componentização com React, e a organização de um projeto front-end do zero.

---

## 🚀 Tecnologias utilizadas

- React.js  
- JavaScript  
- CSS  
- API TMDb (The Movie Database)

---

## 📚 O que aprendi

Como estudante em transição para me tornar um desenvolvedor júnior, esse projeto me ensinou bastante sobre:

- Uso de hooks do React como `useEffect` e `useState`;  
- Como realizar requisições HTTP utilizando `fetch`;  
- Manipulação de dados recebidos da API;  
- Organização de componentes;  
- Estilização com CSS tradicional;  
- Tratamento de estados de carregamento e erro.

---

## 🧠 Desafios enfrentados

Durante o desenvolvimento, enfrentei alguns obstáculos, especialmente na parte de integração com a API da TMDb:

### Problemas com o carregamento inicial dos dados

No início, a aplicação exibia uma tela em branco porque os dados ainda não haviam sido carregados da API. Levei um tempo para entender a importância de verificar se os dados existiam antes de renderizar os componentes.

### Requisições mal formatadas

Cometi erros simples, como esquecer de adicionar a chave de API ou formatar incorretamente a URL. Esses erros resultavam em requisições falhando silenciosamente, o que dificultou o diagnóstico.

### Tratamento de erros da API

Aprendi que nem sempre a API retorna exatamente o que esperamos, precisei implementar verificações extras para garantir que a aplicação não quebrasse com dados indefinidos.

---

## ⚠️ Possíveis problemas ao rodar o projeto

- É necessário ter uma chave de API da TMDb. O projeto ainda não utiliza variáveis de ambiente para isso, então você pode precisar inserir sua chave diretamente no código para testes locais.  
- A aplicação ainda não trata todos os erros possíveis, então uma resposta inesperada da API pode causar comportamentos estranhos.  


---

## 📦 Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/joaovictorde-sena/CineVerse.git

```

Navegue até a pasta do projeto e instale as dependências:


```bash
cd CineVerse
npm install
```

Insira sua chave da TMDb no código onde for necessário .

Inicie o projeto:

```bash
npm run dev
```
