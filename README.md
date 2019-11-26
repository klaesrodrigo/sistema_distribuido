<h1>Sistema de relatórios de cambio monetário</h1>

<h2>Necessidades</h2>

- Node 10+
- Npm 6+
- Redis


<h2>Como Rodar</h2>

Instalar o nodemon globalmente <br>
```npm install nodemon -g```

Instalar o pm2 globalmente <br>
```npm install pm2 -g```

Instalar as dependências <br>
```npm install ```

E para rodar, executar o comando <br>
```npm start```

<h2> Descrição do sistema </h2>

O sistema é composto em 4 partes:

1. Bot
2. Jobs
3. Queue
4. API

- <h4> Bot </h4>
O bot é utilizado para enviar e receber mensagem. Ele é responsável armazenar usuário e enviar os relátorios diários. 
O Bot foi construído através de um token gerado pelo Telegram e uma biblioteca chamada "telegram-bot-api
