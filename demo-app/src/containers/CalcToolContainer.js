import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { resultSelector } from '../selectors/calc-tool.selectors';
import {
  createAddAction,
  createSubtractAction,
  createMultiplyAction,
  createDivideAction,
  createDeleteHistoryEntryAction,
  createClearAction,
} from '../actions/calc-tool.actions';

import { CalcTool } from '../components/CalcTool';

export const CalcToolContainer = () => {
  const result = useSelector(resultSelector);
  const history = useSelector(state => state.history);
  const errorMessage = useSelector(state => state.errorMessage);

  const actions = bindActionCreators(
    {
      onAdd: createAddAction,
      onSubtract: createSubtractAction,
      onMultiply: createMultiplyAction,
      onDivide: createDivideAction,
      onDeleteHistoryEntry: createDeleteHistoryEntryAction,
      onClear: createClearAction,
    },
    useDispatch(),
  );

  return (
    <CalcTool
      result={result}
      history={history}
      errorMessage={errorMessage}
      {...actions}
    />
  );
};
