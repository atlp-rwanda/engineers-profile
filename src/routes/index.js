import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { EngineerList, NotFound } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className='pt-20'>
          <Route exact path='/' component={EngineerList} />
          <Route path='*' component={NotFound} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
