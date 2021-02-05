import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import {
  createAddAction,
  createSubtractAction,
  createMultiplyAction,
  createDivideAction,
  createDeleteHistoryEntryAction,
} from '../actions/calc-tool.actions';

import { CalcTool } from '../components/CalcTool';

export const CalcToolContainer = () => {
  const result = useSelector(state => state.result);
  const history = useSelector(state => state.history);

  const actions = bindActionCreators(
    {
      // onAdd: (value) => dispatch(createAddAction(value)),
      onAdd: createAddAction,
      onSubtract: createSubtractAction,
      onMultiply: createMultiplyAction,
      onDivide: createDivideAction,
      onDeleteHistoryEntry: createDeleteHistoryEntryAction,
    },
    useDispatch(),
  );

  return <CalcTool result={result} history={history} {...actions} />;
};
