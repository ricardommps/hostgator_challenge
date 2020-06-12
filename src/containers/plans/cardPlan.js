import React from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Only from 'commons/only';
import InfoText from 'commons/infoText';
import BuyButton from 'commons/buyButton';
import iconPlanP from 'assets/icon-plan-p.svg';
import iconInfo from 'assets/icon-info.svg';
import { useStyles } from './makeStyles';
import {
  Discount,
  CardHeader,
  Icon,
  IconInfo,
  Price,
  WrapCard,
  Featured,
} from './styledComponents';

const calculateDiscount = price => parseFloat((price * (100 - 40)) / 100);
const calculatePriceMonths = (price, months) => {
  const newPrice = calculateDiscount(price) / months;
  return newPrice.toFixed(2);
};
const calculateSaving = price => {
  return price - calculateDiscount(price);
};
const PlanInfo = ({ classes, styleBuyButton, plan, handleBuyPlan }) => (
  <>
    <Price>
      <InfoText
        classItem={classes.currentPrice}
        label={<FormattedNumber value={plan?.priceOrder} format="money" />}
        display="inline"
      />
      <InfoText
        classItem={classes.discountPrice}
        label={<FormattedNumber value={calculateDiscount(plan?.priceOrder)} />}
        display="inline"
      />
    </Price>
    <InfoText classItem={classes.title} label={<FormattedMessage id="plans.card.equivalent" />} />
    <InfoText classItem={classes.currency} label={'R$'} color="primary" display="inline" />
    <InfoText
      classItem={classes.price}
      label={
        <FormattedNumber
          value={calculatePriceMonths(plan?.priceOrder, plan?.months)}
          style={'decimal'}
        />
      }
      color="primary"
      display="inline"
    />
    <InfoText
      classItem={classes.currency}
      label={<FormattedMessage id="plans.card.months" />}
      color="primary"
      display="inline"
    />
    <div>
      <BuyButton styleBuyButton={styleBuyButton} handleBuyPlan={handleBuyPlan} />
    </div>
    <div style={{ display: 'inline-flex' }}>
      <InfoText
        classItem={classes.domain}
        label={<FormattedMessage id="plans.card.free.domain" />}
      />
      <IconInfo src={iconInfo} alt="Icon Info" />
    </div>
    <div style={{ display: 'inline-flex' }}>
      <InfoText classItem={classes.economy} label={<FormattedMessage id="plans.card.saving" />} />{' '}
      &nbsp;
      <InfoText
        classItem={classes.economy}
        label={<FormattedNumber value={calculateSaving(plan?.priceOrder)} format="money" />}
      />
      <Discount>40% off</Discount>
    </div>
  </>
);
const HeaderFeatured = ({ classes }) => (
  <Featured>
    <Typography className={classes.featuredText}></Typography>
  </Featured>
);

const BottomFeatured = ({ classes }) => (
  <Featured>
    <Typography className={classes.featuredTextBottom}></Typography>
  </Featured>
);

const headerStylenotFeatured = {
  borderTop: '0',
  borderRadius: '0',
};
const CardPlan = ({ featured, styleBuyButton, plan, cycleSelected }) => {
  const classes = useStyles();

  const handleBuyPlan = () => {
    const url = `?a=add&pid=${plan.id}&billingcycle=${cycleSelected}&promocode=${'PROMOHG40'}`;
  };
  return (
    <WrapCard>
      <Only when={featured}>
        <HeaderFeatured classes={classes} />
      </Only>
      <Card className={!featured ? classes.root : classes.rootFeatured}>
        <CardHeader style={featured ? headerStylenotFeatured : null}>
          <Icon src={iconPlanP} alt="Icon's Plan" />
          <Typography color="primary" className={classes.planTitle}>
            {plan?.name}
          </Typography>
        </CardHeader>
        <CardContent className={classes.content}>
          <PlanInfo
            classes={classes}
            styleBuyButton={styleBuyButton}
            plan={plan?.cycle[cycleSelected]}
            handleBuyPlan={handleBuyPlan}
          />
        </CardContent>
        <CardActions className={classes.footer}>
          <Typography className={classes.textFooter}>
            <FormattedMessage id="plans.card.footer.colun1" />
          </Typography>
          <Typography className={classes.textFooter}>
            <FormattedMessage
              id="plans.card.footer.colun2"
              values={{
                value: (
                  <strong>
                    <FormattedMessage id="plans.card.footer.gb" />
                  </strong>
                ),
              }}
            />
          </Typography>
          <Typography className={classes.textFooter}>
            <FormattedMessage
              id="plans.card.footer.colun3"
              values={{
                value: (
                  <strong>
                    <FormattedMessage id="plans.card.footer.unlimited" />
                  </strong>
                ),
              }}
            />
          </Typography>
          <Typography className={classes.textFooter}>
            <FormattedMessage
              id="plans.card.footer.colun4"
              values={{
                value: (
                  <strong>
                    <FormattedMessage id="plans.card.footer.free" />
                  </strong>
                ),
              }}
            />
          </Typography>
          <Typography className={classes.textFooter}>
            <FormattedMessage
              id="plans.card.footer.colun5"
              values={{
                value: (
                  <strong>
                    <FormattedMessage id="plans.card.footer.free" />
                  </strong>
                ),
              }}
            />
          </Typography>
        </CardActions>
      </Card>
      <Only when={featured}>
        <BottomFeatured classes={classes} />
      </Only>
    </WrapCard>
  );
};

export default CardPlan;
