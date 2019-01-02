module.exports = (app) => {
  const GaleriaController = {
    imagens(req, res) {
      let imagens = [
        {
          url: 'img/carousel/imagem_1.jpg',
          titulo: null,
          descricao: null
        },
        {
          url: 'img/carousel/imagem_2.jpg',
          titulo: 'Instituições apoiadoras',
          descricao: 'Auxiliam na tarefa de educar'
        },
        {
          url: 'img/carousel/imagem_3.jpg',
          titulo: 'Campo de futebol',
          descricao: null
        },
        {
          url: 'img/carousel/imagem_4.jpg',
          titulo: 'Fachada da escola',
          descricao: null
        }
      ];

      res.status(200).json(imagens);
    }
  };

  return GaleriaController;
};
