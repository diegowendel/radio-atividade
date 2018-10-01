const bodyParser = require('body-parser');
const config = require('./config/config')();
const express = require('express');
const logger = require('./app/utils/logger');

const items = require('./app/routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
require('./config/database')(config.MONGODB_URI);

// Use routes
app.use('/api/items', items);

// Initialize the app
app.listen(config.PORT, () => {
  logger.success(`RadioAtividade rodando na porta ${config.PORT}`);
});
