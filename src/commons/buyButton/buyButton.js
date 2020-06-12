import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buy: {
    width: '100%',
    borderRadius: '1.625rem',
    fontSize: 22,
    fontWeight: '700',
    margin: '1.375rem 0',
  },
});

const BuyButton = ({ styleBuyButton, handleBuyPlan }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      className={classes.buy}
      style={styleBuyButton}
      onClick={handleBuyPlan}
    >
      <FormattedMessage id="plans.button.buy" />
    </Button>
  );
};

export default memo(BuyButton);
