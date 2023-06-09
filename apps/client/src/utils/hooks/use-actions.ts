import { actions } from 'src/store/actions';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = () => {
  const dispatch = useDispatch();

  return { ...bindActionCreators(actions, dispatch), dispatch };
};