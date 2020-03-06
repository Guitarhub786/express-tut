const express = require('express');

const app = express();



app.get('/', (req, res) => {
  res.send('Hello world');
  console.log('Made it here!');
});

app.use((req, res) => {
  res.status(404)
    .send('Unknown Request - Fatface')
})


app.listen(8080, () => {
  console.log('App is listening on port 8080');
})