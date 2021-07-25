const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 2999;

const minute = (min) => min * 60000;

const request = (url) => {
  return axios
    .get(url)
    .then((resp) => {
      console.log('Enviando um request!');
    })
    .catch(function (error) {
      console.log(error);
    });
};

const ping = () => {
  // request('https://filipe-move.herokuapp.com/check');
  request('https://homolog-base-bot.herokuapp.com/check');
};

app.get('/check', function (req, res) {
  res.send('Olá :D');
  console.log('Recebi o request :)');
});

setInterval(ping, minute(5));

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
