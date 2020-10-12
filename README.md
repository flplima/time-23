# Getúlia

A Getúlia é uma atendente virtual/chatbot para WhatsApp, feita para atender pequenos comércios.

Ela é capaz de entender o pedido do cliente, gerar um link de pagamento através da GetNet, e enviar o pedido pronto e pago para o responsável do negócio.

Por baixo dos panos, ela usa tecnologias como processamento de linguagem natural (nlp) para entender as mensagens do cliente, e aprendizado de máquina (machine learning), para aprender sobre todos os produtos que o lojista vende e conseguir responder com precisão.

## Instruções para iniciar

```bash
# clone este repositório
git clone https://github.com/flplima/time-23.git

# entre na pasta server,
# instale as dependências e inicie
# é necessário ter um banco mongodb na porta 27017
cd server
yarn
yarn start:dev

# entre na pasta client,
# instale as dependências e inicie
cd client
yarn
yarn dev

# entre na pasta whatsapp,
# instale as dependências e inicie
cd whatsapp
yarn
yarn start
```

Acesse http://localhost:3000 para o site e http://localhost:3001 para o whatsapp.

A api estará funcionando na porta 3002.
