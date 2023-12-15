import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
