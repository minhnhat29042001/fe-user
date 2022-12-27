import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store';

export const useStartUp = () => {
  const dispatch = useDispatch();
  const startUp = () => {
    dispatch(actions.startup.callStartUp());
  };
  useEffect(() => startUp(), []);
};
