import React, { useEffect, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { getPlans } from './plansActions';
import Header from 'containers/header';
import SliderCard from './components/slider/sliderCard';
import SliderLoad from './components/slider/sliderLoad';
import RadioButton from 'commons/radioButton';
import Only from 'commons/only';
import { useStyles } from './makeStyles';
import { Container, WrapFilterPlans } from './styledComponents';

const Plans = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { plans, plansInFlight } = useSelector(state => state.plans);
  const [selectPlan, setselectPlan] = React.useState('triennially');

  const handleClickPlans = item => {
    setselectPlan(item);
  };

  useEffect(() => {
    dispatch(getPlans());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <Typography variant="subtitle1" align="center" color="primary">
          <FormattedMessage id="plans.card.title.select.cycle" />
        </Typography>
        <FilterPlans
          handleClickPlans={handleClickPlans}
          selectPlan={selectPlan}
          setselectPlan={setselectPlan}
        />
        <Only when={!plansInFlight}>
          <SliderCard plans={plans} cycleSelected={selectPlan} />
        </Only>
        <Only when={plansInFlight}>
          <SliderLoad />
        </Only>
      </Container>
      <div>
        <Typography className={classes.textFooter}>
          <FormattedMessage id="plans.card.footer.conditions" />
        </Typography>
      </div>
    </>
  );
};

const FilterPlans = ({ handleClickPlans, selectPlan, setselectPlan }) => {
  return (
    <WrapFilterPlans>
      <RadioButton
        label={<FormattedMessage id="plans.radio.triennially" />}
        selected={selectPlan === 'triennially'}
        handleClick={() => handleClickPlans('triennially')}
      />
      <RadioButton
        label={<FormattedMessage id="plans.radio.annually" />}
        selected={selectPlan === 'annually'}
        handleClick={() => handleClickPlans('annually')}
      />
      <RadioButton
        label={<FormattedMessage id="plans.radio.monthly" />}
        selected={selectPlan === 'monthly'}
        handleClick={() => handleClickPlans('monthly')}
      />
    </WrapFilterPlans>
  );
};
export default memo(Plans);
