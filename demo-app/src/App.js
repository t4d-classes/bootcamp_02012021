import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { colorToolStore } from './stores/colorToolStore';
import { useCarToolStore } from './hooks/useCarToolStore';

import { Layout } from './components/Layout';
import { ToolHeader } from './components/ToolHeader';
import { ToolFooter } from './components/ToolFooter';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';

import { CarToolStoreProvider } from './contexts/carToolStoreContext';

import { ColorListContainer } from './containers/ColorListContainer';
import { AddColorFormContainer } from './containers/AddColorFormContainer';
import { CarTableContainer } from './containers/CarTableContainer';
import { AddCarFormContainer } from './containers/AddCarFormContainer';

// const colorList = [
//   { id: 1, name: 'yellow', hexcode: 'aaa' },
//   { id: 2, name: 'teal', hexcode: 'aaa' },
//   { id: 3, name: 'orange', hexcode: 'aaa' },
//   { id: 4, name: 'blue', hexcode: 'aaa' },
//   { id: 5, name: 'green', hexcode: 'aaa' },
// ];

const carList = [
  {
    id: 1,
    make: 'Ford',
    model: 'Fusion Hybrid',
    year: 2021,
    color: 'blue',
    price: 45000,
  },
  {
    id: 2,
    make: 'Tesla',
    model: 'S',
    year: 2019,
    color: 'white',
    price: 120000,
  },
];

export function App() {
  const carToolStore = useCarToolStore(carList);

  return (
    <Router>
      <Provider store={colorToolStore}>
        <CarToolStoreProvider carToolStore={carToolStore}>
          <Layout>
            <ToolHeader headerText="The App" />
            <Menu />
            <main>
              <Switch>
                <Route path="/color-list">
                  <ColorListContainer />
                </Route>
                <Route path="/add-color">
                  <AddColorFormContainer />
                </Route>
                <Route path="/car-table">
                  <CarTableContainer />
                </Route>
                <Route path="/add-car">
                  <AddCarFormContainer />
                </Route>
                <Route path="/" exact>
                  <Home />
                </Route>
              </Switch>
            </main>
            <aside>
              <Sidebar />
            </aside>
            <ToolFooter companyName="A Cool Company, Inc." />
          </Layout>
        </CarToolStoreProvider>
      </Provider>
    </Router>
  );
}
