require('dotenv').config();
// const error = require('./middlewares/error');
const {
  validFields: { verifyRequiredFields, verifyInvalidFields },
} = require('./middlewares');
const route = require('./router');
const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// app.use(middlewares);

app.use('/login', verifyRequiredFields, verifyInvalidFields, route.login);

app.listen(port, () => console.log('ouvindo porta', port));
