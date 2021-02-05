import { useState } from 'react';

export const CalcTool = ({ result, onAdd, onSubtract }) => {
  const [numInput, setNumInput] = useState(0);

  return (
    <>
      <form>
        <div>Result: {result}</div>
        <div>
          Num Input:{' '}
          <input
            type="text"
            value={numInput}
            onChange={e => setNumInput(parseInt(e.target.value))}
          />
        </div>
        <button type="button" onClick={() => onAdd(numInput)}>
          Add
        </button>
        <button type="button" onClick={() => onSubtract(numInput)}>
          Subtract
        </button>
      </form>
    </>
  );
};
