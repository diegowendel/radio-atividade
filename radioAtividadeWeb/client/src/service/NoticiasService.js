import axios from 'axios';

class NoticiasService {

  buscarNoticias = () => {
    axios.get('http://localhost:5000/noticias').then(res => {
      console.log('res', res.data);
      return res.data;
    }).catch(err => {
      console.error('ERRO:', err);
    });

    return null;
  };
}

const noticiasService = new NoticiasService();

export default noticiasService;
