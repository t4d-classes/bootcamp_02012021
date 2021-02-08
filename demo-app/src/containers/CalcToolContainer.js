import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

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
  const result = useSelector(state => state.result);
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

  // action.onAdd = (value) => dispatch(createAddAction(value))

  return (
    <CalcTool
      result={result}
      history={history}
      errorMessage={errorMessage}
      {...actions}
    />
  );
};
