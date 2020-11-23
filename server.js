const express = require('express');
const app = express();
const PORT = 3000


app.listen(PORT, () => {
  console.log('SERVER EN MARCHA, ADELANTE!!!');
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('YOU ARE IN THE MAIN PAGE')
});

app.get('/contact-us', (req, res) => {
  res.send('This is the contact us page')
});

app.get('/request/country', function (req, res) {
  res.json(films)
});

app.post('/request/food', (req, res) => {
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)
  console.log(`*********************`)

  res.send('My Favourite food is ' + res.body.food)
});



