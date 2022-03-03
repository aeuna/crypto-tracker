import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Conis';
import Intro from './routes/Intro';

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/coins/:coinId">
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
