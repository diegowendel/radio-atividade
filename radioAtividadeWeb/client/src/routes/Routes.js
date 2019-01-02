import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Blog from '../screens/Blog/Blog';
import Contato from '../screens/Contato/Contato';
import Galeria from '../screens/Galeria/Galeria';
import Home from '../screens/Home/Home';
import NotFound from '../screens/NotFound/NotFound';
import Programacao from '../screens/Programacao/Programacao';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/contato" exact component={Contato} />
      <Route path="/galeria" exact component={Galeria} />
      <Route path="/programacao" exact component={Programacao} />
      { /* Renderiza a página de erro 404 para rotas inexistentes, deve estar sempre por último na lista das rotas! */ }
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
