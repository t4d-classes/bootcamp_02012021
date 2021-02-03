import PropTypes from 'prop-types';
import { useState } from 'react';

const getInitialColorForm = () => ({
  name: '',
  hexcode: '',
});

export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [colorForm, setColorForm] = useState(getInitialColorForm());

  const change = e => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitColor = () => {
    onSubmitColor({ ...colorForm });

    setColorForm(getInitialColorForm());
  };

  return (
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
      <button type="button" onClick={submitColor}>{buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
  onSubmitColor: PropTypes.func.isRequired,
};