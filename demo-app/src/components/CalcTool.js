import { useState } from 'react';

export const CalcTool = ({
  result,
  history,
  errorMessage,
  onAdd,
  onSubtract,
  onMultiply,
  onDivide,
  onDeleteHistoryEntry,
}) => {
  const [numInput, setNumInput] = useState(0);

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
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
      <ul>
        {history.map(entry => (
          <li key={entry.id}>
            {entry.opName} {entry.opValue}
            <button
              type="button"
              onClick={() => onDeleteHistoryEntry(entry.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
