import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'yellow' },
  { id: 2, name: 'teal' },
  { id: 3, name: 'orange' },
  { id: 4, name: 'blue' },
  { id: 5, name: 'green' },
];

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2021, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'white', price: 120000 },
];

render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList, someProp: 'test' }) */}
    <ColorTool colors={colorList}
      headerText="My Color Tool" />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);


