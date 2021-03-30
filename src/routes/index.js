import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { EngineerList, NotFound } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={EngineerList} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
