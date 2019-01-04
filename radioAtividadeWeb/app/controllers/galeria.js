module.exports = (app) => {
  const GaleriaController = {
    imagens(req, res) {
      let imagens = [
        {
          src: 'img/galeria/imagem_1.jpg'
        },
        {
          src: 'img/galeria/imagem_2.jpg'
        },
        {
          src: 'img/galeria/imagem_3.jpg'
        },
        {
          src: 'img/galeria/imagem_4.jpg'
        },
        {
          src: 'img/galeria/imagem_5.jpg'
        },
        {
          src: 'img/galeria/imagem_6.jpg'
        },
        {
          src: 'img/galeria/imagem_7.jpg'
        },
        {
          src: 'img/galeria/imagem_8.jpg'
        }
      ];

      res.status(200).json(imagens);
    }
  };

  return GaleriaController;
};
