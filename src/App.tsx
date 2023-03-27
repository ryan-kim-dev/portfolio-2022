import Router from './routes/Router';
import GlobalStyle from './GlobalStyle';
import { Modeling, Nav } from '@component/components';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Modeling />
      <Nav />
      <Router />
    </div>
  );
}

export default App;
