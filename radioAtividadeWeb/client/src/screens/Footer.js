import React from 'react';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container bottom_border">
        <div class="row">
          <div class=" col-sm-4 col-md col-sm-4  col-12 col">
            <p><i class="fa fa-location-arrow"></i> Jacareí - SP</p>
            <p><i class="fa fa-phone"></i>  (12) 98189-8038 (WhatsApp)</p>
            <p><i class="fa fa fa-envelope"></i> radioatividade@radioatividade.com</p>
          </div>
          <div class=" col-sm-4 col-md  col-6 col">
          <p>Grupo RadioAtividade é formado por professores, alunos e ex-alunos da ETEC Cônego José Bento. Projeto desenvolvido sem interesses financeiros.</p>
          </div>
          <div class=" col-sm-4 col-md  col-6 col">
            <p><i class="fa fa-link"></i> <a href="http://etecjbento.com.br/web/" target="_blank" rel="noopener noreferrer">ETEC Cônego José Bento</a></p>
            <p><i class="fa fa-link"></i> <a href="https://www.cps.sp.gov.br/" target="_blank" rel="noopener noreferrer">Centro Paula Souza</a></p>
            <p><i class="fa fa-link"></i> <a href="http://www.fatecjacarei.com.br/" target="_blank" rel="noopener noreferrer">FATEC Jacareí</a></p>
          </div>
        </div>
      </div>
      <div class="container">
        <p class="text-center">
          Feito com <span class="love">❤</span>  |  Sugira melhorias no <a href="https://github.com/diegowendel/radio-atividade" target="_blank" rel="noopener noreferrer">Github</a> do projeto
        </p>
        <ul class="social_footer_ul">
          <li><a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://github.com/diegowendel/radio-atividade" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram" ></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
