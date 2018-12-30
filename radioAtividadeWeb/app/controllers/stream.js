const fs = require('fs');
const getStat = require('util').promisify(fs.stat);

module.exports = (app) => {
  const StreamController = {
    async audio(req, res) {
      const filePath = './client/public/audio/music.ogg';
      const stat = await getStat(filePath);
      console.log(stat);

      // Informações sobre o tipo do conteúdo e o tamanho do arquivo
      res.writeHead(200, {
        'Content-Type': 'audio/ogg',
        'Content-Length': stat.size
      });

      const stream = fs.createReadStream(filePath);

      // Só exibe quando terminar de enviar tudo
      stream.on('end', () => console.log('acabou'));

      // Faz streaming do áudio
      stream.pipe(res);
    }
  };

  return StreamController;
};
