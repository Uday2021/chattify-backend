const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { chat } = require('./src/data/chatData');

const app = express();
app.use(cors());
dotenv.config();

const port = process.env.PORT || 3006;

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.get('/api/chat', (req, res) => {
  res.send(chat);
});

app.get('/api/chat/:id', (req, res) => {
  const singleChat = chat.find((item) => item._id === req.params.id);
  res.send(singleChat);
});

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
