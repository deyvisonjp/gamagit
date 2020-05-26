import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path='/' exact component={Home} /> {/* exact -> Limita a rota '/' */}
            <Route path='/repositories' component={Repositories}/>
         </Switch>
      </BrowserRouter>
   )
}
