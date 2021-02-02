import { useState } from 'react';

export const ColorTool = (props) => {

  // const colorFormState = useState({ }); // returns an array (which we are treating like a tuple)
  // const colorForm = colorFormState[0];
  // const setColorForm = colorFormState[1];

  // array destructuring
  //      model data, update & re-render function
  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  } /* this object is used only on the first render to initialize the state */);

  const change = (e) => {

    // update the model, and trigger the re-render
    setColorForm({
      ...colorForm, // copy the colorForm object properties into a new object
      // computed property
      [ e.target.name ]: e.target.value,
    });

  };

  console.log(colorForm);

  return (
    <>
      <header>
        <h1>{props.headerText}</h1>
      </header>
      <ul>
        {props.colors.map(color => <li key={color.id}>
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
      </form>
    </>
  );

};