import PropTypes from 'prop-types';
import { useState } from 'react';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState([ ...props.colors ]);

  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  });

  const change = (e) => {
    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });

  };

  const addColor = () => {

    setColors([
      ...colors,
      {
        ...colorForm,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      },
    ]);

    setColorForm({
      name: '', hexcode: ''
    });

  };

  console.log(colorForm);

  return (
    <>
      <header>
        <h1>{props.headerText}</h1>
      </header>
      <ul>
        {colors.map(color => <li key={color.id}>
          {color.name}
        </li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="name-input">Name</label>
          <input type="text" id="name-input" name="name"
            value={colorForm.name} onChange={change} />
        </div>
        <div>
          <label htmlFor="hexcode-input">Hexcode</label>
          <input type="text" id="hexcode-input" name="hexcode"
            value={colorForm.hexcode} onChange={change} />
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );

};

ColorTool.defaultProps = {
  headerText: 'Color Tool',
  colors: [],
};

ColorTool.propTypes = {
  headerText: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    hexcode: PropTypes.string,
  })).isRequired,
};