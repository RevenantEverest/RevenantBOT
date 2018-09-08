require('dotenv').config();

//Dependencies
const config = require('./config/config');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const bot = new config.Discord.Client();
const commands = require('./commands/commands');

//Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes

//Default Routes
app.use("/", (req, res) => {
  res.json({
    message: "Fireside API"
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

bot.on("message", (message) => {
  if(message.author.equals(bot.user)) return;
  commands.commands(message);
});

bot.login(config.key);
