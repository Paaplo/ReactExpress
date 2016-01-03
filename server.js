import express from 'express';

let app = express();

app.get('/',  (req, res) => {
  res.send('Hello World!');
});

var server = app.listen(3000,  () =>{
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});