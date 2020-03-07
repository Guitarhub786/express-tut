const express = require('express');

const app = express();

// angular app
app.use(express.static('../TurtleFactQuiz'));


// pritty print json to window
// .set sets global properties (tweak configuration)
//app.set('json spaces', 2);


app.use(require('./routes'));


app.use((req, res) => {
  res.status(404)
    .send('Unknown Request')
})


app.listen(8080, () => {
  console.log('App is listening on port 8080');
})