import { useState } from 'react';

export const CalcTool = ({
  result,
  onAdd,
  onSubtract,
  onMultiply,
  onDivide,
}) => {
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
          +
        </button>
        <button type="button" onClick={() => onSubtract(numInput)}>
          -
        </button>
        <button type="button" onClick={() => onMultiply(numInput)}>
          *
        </button>
        <button type="button" onClick={() => onDivide(numInput)}>
          /
        </button>
      </form>
    </>
  );
};
