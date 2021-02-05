import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import {
  createAddAction,
  createSubtractAction,
} from '../actions/calc-tool.actions';

import { CalcTool } from '../components/CalcTool';

export const CalcToolContainer = () => {
  const result = useSelector(state => state.result);

  const actions = bindActionCreators(
    {
      onAdd: createAddAction,
      onSubtract: createSubtractAction,
    },
    useDispatch(),
  );

  return <CalcTool result={result} {...actions} />;
};
