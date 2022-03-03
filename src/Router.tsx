import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Conis';
import Intro from './routes/Intro';

//  basename={process.env.PUBLIC_URL}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/coins">
          <Coins />
        </Route>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
