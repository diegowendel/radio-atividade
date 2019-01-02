module.exports = (app) => {
  const { galeria } = app.controllers;
  app.get('/galeria/imagens', galeria.imagens);
}
