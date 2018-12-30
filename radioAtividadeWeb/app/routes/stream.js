module.exports = (app) => {
  const {stream} = app.controllers;
  app.get('/audio', stream.audio);
};
