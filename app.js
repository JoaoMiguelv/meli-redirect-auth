const express = require("express");
const app = express();

app.listen(3001, () => {
    console.log("Server is running!")
})

app.use(express.json());

/* ROTAS DA APLICACAO */
const indexRouter = require('./src/routes/index');
app.use('/', indexRouter);
const meliAuthRoute = require('./src/routes/meliAuthRoute');
app.use('/meli-auth', meliAuthRoute);

module.exports = app;