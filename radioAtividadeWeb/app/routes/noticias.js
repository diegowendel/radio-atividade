module.exports = (app) => {
  const { noticias } = app.controllers;
  app.get('/noticias/carousel', noticias.carousel);
}
