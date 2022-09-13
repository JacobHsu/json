const express = require('express');
const auth = require('./middlewares/auth')
const app = express();
require('./config/express')(app);
app.use(auth())

const routes = require('./routes');
app.use(routes);

const { PORT } = require('./config/config');
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}...`));
