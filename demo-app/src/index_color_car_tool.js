import { render } from 'react-dom';

import { App } from './App';

// const ColorToolApp = () => {
//   const colorToolStore = useColorToolStore(colorList);

//   return (
//     <ColorToolStoreProvider colorToolStore={colorToolStore}>
//       <ColorTool /> {/* props.children */}
//     </ColorToolStoreProvider>
//   );
// };

// const CarToolApp = () => {
//   const carToolStore = useCarToolStore(carList);

//   return (
//     <CarToolStoreProvider carToolStore={carToolStore}>
//       <CarTool /> {/* props.children */}
//     </CarToolStoreProvider>
//   );
// };

render(<App />, document.querySelector('#root'));
