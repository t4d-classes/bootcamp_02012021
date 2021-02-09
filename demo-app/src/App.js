import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { colorToolStore } from './stores/colorToolStore';
import { carToolStore } from './stores/carToolStore';
import { calcToolStore } from './stores/calcToolStore';

import { Layout } from './components/Layout';
import { ToolHeader } from './components/ToolHeader';
import { ToolFooter } from './components/ToolFooter';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';

import { ColorListContainer } from './containers/ColorListContainer';
import { AddColorFormContainer } from './containers/AddColorFormContainer';
import { CarTableContainer } from './containers/CarTableContainer';
import { AddCarFormContainer } from './containers/AddCarFormContainer';
import { CalcToolContainer } from './containers/CalcToolContainer';

export function App() {
  return (
    <Router>
      <Layout>
        <ToolHeader headerText="The App" />
        <Menu />
        <main>
          <Provider store={colorToolStore}>
            <Route path="/color-list">
              <ColorListContainer />
            </Route>
            <Route path="/add-color">
              <AddColorFormContainer />
            </Route>
          </Provider>
          <Provider store={carToolStore}>
            <Route path="/car-table">
              <CarTableContainer />
            </Route>
            <Route path="/add-car">
              <AddCarFormContainer />
            </Route>
          </Provider>
          <Provider store={calcToolStore}>
            <Route path="/calc-tool">
              <CalcToolContainer />
            </Route>
          </Provider>
          <Route path="/" exact>
            <Home />
          </Route>
        </main>
        <aside>
          <Sidebar />
        </aside>
        <ToolFooter companyName="A Cool Company, Inc." />
      </Layout>
    </Router>
  );
}
