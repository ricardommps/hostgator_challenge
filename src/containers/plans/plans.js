import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlans } from './plansActions';

const Plans = () => {
  const dispatch = useDispatch();
  const { plans } = useSelector(state => state.plans);
  const { planoP, planoM, planoTurbo } = plans;

  useEffect(() => {
    dispatch(getPlans());
  }, [dispatch]);
  return (
    <div>
      <h1>Plans</h1>
    </div>
  );
};

export default Plans;
