require('dotenv').config();
require('express-async-errors');
const {
  validFields: { verifyRequiredFields, verifyInvalidFields },
  error, auth,
} = require('./middlewares');
const route = require('./router');
const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', verifyRequiredFields, verifyInvalidFields, route.login);
app.use('/user', auth, route.user);

app.use(error);
app.listen(port, () => console.log('ouvindo porta', port));
