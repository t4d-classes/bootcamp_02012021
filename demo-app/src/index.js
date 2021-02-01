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

render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList, someProp: 'test' }) */}
    <ColorTool colors={colorList}
      headerText="My Color Tool" />
    <ColorTool colors={colorList}
      headerText="My Color Tool" />
    <CarTool />
  </>,
  document.querySelector('#root'),
);


