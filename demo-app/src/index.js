import { render } from 'react-dom';

import { useColorToolStore } from './hooks/useColorToolStore';
import { useCarToolStore } from './hooks/useCarToolStore';

import { Layout } from './components/Layout';
import { ToolHeader } from './components/ToolHeader';
import { ToolFooter } from './components/ToolFooter';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import { CarToolStoreProvider } from './contexts/carToolStoreContext';

const colorList = [
  { id: 1, name: 'yellow', hexcode: 'aaa' },
  { id: 2, name: 'teal', hexcode: 'aaa' },
  { id: 3, name: 'orange', hexcode: 'aaa' },
  { id: 4, name: 'blue', hexcode: 'aaa' },
  { id: 5, name: 'green', hexcode: 'aaa' },
];

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

const ColorToolApp = () => {
  const colorToolStore = useColorToolStore(colorList);

  return (
    <ColorToolStoreProvider colorToolStore={colorToolStore}>
      <ColorTool /> {/* props.children */}
    </ColorToolStoreProvider>
  );
};

const CarToolApp = () => {
  const carToolStore = useCarToolStore(carList);

  return (
    <CarToolStoreProvider carToolStore={carToolStore}>
      <CarTool /> {/* props.children */}
    </CarToolStoreProvider>
  );
};

render(
  <Layout>
    <ToolHeader headerText="The App" />
    <Menu />
    <main>
      <Home />
    </main>
    <aside>
      <Sidebar />
    </aside>
    <ToolFooter companyName="A Cool Company, Inc." />
  </Layout>,
  document.querySelector('#root'),
);
