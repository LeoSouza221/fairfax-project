# Fairfax Project
Projeto criado com o objetivo de cumprir os requisitos para a vaga de desenvolvedor front end, tentei cumprir o máximo de requisitos exigidos no prazo que foi estipulado, optei por fazer algumas alterações em relação ao que foi pedido, como os filtros por data, que na minha visão exigiriam um trabalho e complexidade a mais e que no momento não dispunha, no mais, qualquer dúvida estou a disposição no email leosouza221@gmail.com ou via [Linkedin](https://www.linkedin.com/in/leonardo-de-souza-a75557156/)

![image](https://github.com/LeoSouza221/fairfax-project/assets/39174217/30211b13-e915-4f52-962f-c88fc291464e)

[Demo](https://leosouza221.github.io/fairfax-project/)

## 💿 Instalação
`yarn install`

## 💡 Uso

### Iniciando servidor de desenvolvimento

Para iniciar o servidor de desenvolvimento, digite o seguinte comando. O servidor ficará acessivel no [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```

## Tecnologias usadas
- **Vue**
- **Vuetify**
- **Pinia**
- **Vite**
- **Vue Router**
- **Typescript**
- **Vue Test Utils**
- **Vue Currency Input**
  
## ✨ Features
Até a presente data o projeto conta com as seguintes features implementadas

- **Listagem de hotéis**: Localizado na Home, o usuário deve conseguir visualizar uma listagem de hoteis.
- **Visualização de detalhe de hotéis**: Ao clicar em um hotel da listagem, um modal irá abrir e o usuário conseguira visualizar as informações detalhadas de um hotel.
- **Ir para a página de reserva**: Enquanto visualiza os detalhes de um hotel, o usuário poderá ver um botão escrito "Reservar", ao clica-lo ele será redirecionado para a página de reserva do devido hotel.
- **Realizar a reserva de um hotel**: Após clicar no botão "Reservar", localizado no modal de detalhes do hotel, o usuário será redirecionado para a página de reserva do devido hotel. Após preencher todos os campos corretamente o botão de pagamento será liberado e o usuário poderá confirmar a reserva do hotel e então ele será redirecionado novamente para a Home 
- **Receber notificação de reserva**: Após alguns segundos do usuário ter realizado uma reserva de hotel com sucesso, o icone de noticação, localizado no header, irá informar que há uma nova notificação, ao clicar haverá uma mensagem informando que a reserva foi realizado com sucesso e a quantidade de notificações irá zerar novamente. O usuário terá opção de excluir a notificação se prefirir.
- **Adicionar até 4 hotéis para comparação**: Na listagem de hoteis, no canto superior direito de cada card, há um botão que irá adicionar o hotel a lista de comparação, lembrando que é possível adicionar no máximo 4 hoteis, ao adicionar o botão irá mudar seu ícone e cor, para que seja possível remover o item da lista de comparação.
- **Comparar hotéis**: Quando há pelo menos 2 hoteis adicionados à lista de comparações um ícone ira aparecer no header da página, ao clica-lo o usuário será redirecionado para a tela de comparação de hotéis, onde poderá ver as informações detalhadas dos hotéis e compara-las entre si.
- **Filtragem de hotéis**: Na home, juntamente com a listagem de hotéis na parte superior da página há também filtros que podem ser aplicados para encontrar hoteis com caracteristicas especificas, o usuário pode usar até 4 filtros, sendo eles: Cidade, Quantidade de quartos, Preço mínimo e Preço máximo 
- **Ordenação de hotéis**: Na home, juntamente com a listagem de hotéis, entre a listagem e a filtragem de hotéis, há um icone de ordenação, que ao ser clicado o usuário poderá ver opções para o ordenação de hotéis, sendo elas: Cidade, Avaliação, Quantidade de avaliação e Preço

## Requisitos Faltando
Devido ao prazo apertado para a realização do projeto (3 dias) alguns requisitos acabaram ficando de fora da atual versão

- **Requisição fake (mock)**: Ainda pretendo criar uma promise para mockar essas requisições
- **Documentação completa**: Não consegui detalhar da forma que queria a documentação
- **Testes**

## 📑 License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present Vuetify, LLC
