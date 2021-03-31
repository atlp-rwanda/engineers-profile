import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { EngineerList, NotFound } from '../pages';

const Routes = () => {
  return (
    <div className='pt-20'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={EngineerList} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
