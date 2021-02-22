var express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 2999;

app.get('/check', function(req, res) {
  res.send('Recebi o request :)');
  //console.log(res);
  console.log('Recebi o request :)');
});

function setMinute(min){
  return minute = (min*60*1000)
}

setInterval(ping, setMinute(5))

function ping() {
  axios.get('https://homolog-base-bot.herokuapp.com/')
    .then(resp => {
      console.log("Enviando um request!");
    })
    .catch(function (error){ 
      console.log(error);
  });
}

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
