<h1>Sistema de relatórios de cambio monetário</h1>

<h2>Necessidades</h2>

- Node 10+
- Npm 6+
- Redis
- Mongo


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
O Bot é utilizado para enviar e receber mensagem. Ele é responsável armazenar usuário e enviar os relátorios diários. 
O Bot foi construído através de um bot criado pelo Telegram e uma biblioteca chamada "node-telegram-bot-api", que integra a aplicação com o bot criado.

- <h4> Jobs </h4>
Os jobs são os trabalhos executados de tempos em tempos. eles são adicionados ao uma fila que processa os procedimentos em background, avisando quando o trabalho é iniciado e finalidado. Ao todo são 2 jobs, um para buscar em uma API externas a cotação das moedas e salvar em um banco de dados mongo. Esse job é executado de minuto em minuto. O segundo job é responsável por pegar os usuários cadastrados e a cotação da moeda salva em banco, monta o relatório, e envia ele através do Bot telegram. Esse job roda a cada 24hrs.

Os jobs são salvos no Redis, para ser processada pela fila.

- <h4> Queue </h4>
Esse serviço é responsável por executar os Jobs que foram colocados na fila. A Queue fica ouvindo os Jobs que são registrados no Redis, e quando registrados, ela interpreta os dados e executa a ordem e o processo. É possível configurar prioridade na fila, fazendo com que um job com prioridade maior seja executado antes.

- <h4> API </h4>
É responsável por fazer o gerenciamento de usuários e moedas. Ele serve tanto para mostrar as moedas, como para integrar os serviços do sistema distribuído, mantendo o sistema integro.

- 
