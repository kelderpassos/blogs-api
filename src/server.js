require('dotenv').config();
require('express-async-errors');
const {
  validFields: { verifyRequiredFields, verifyInvalidFields },
  error,
} = require('./middlewares');
const routes = require('./router');
const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', verifyRequiredFields, verifyInvalidFields, routes.login);
app.use('/user', routes.user);
app.use('/categories', routes.category);

app.use(error);
app.listen(port, () => console.log('ouvindo porta', port));
