import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfoText from 'commons/infoText';
import BuyButton from 'commons/buyButton';
import iconPlanP from 'assets/icon-plan-p.svg';
import iconInfo from 'assets/icon-info.svg';
import { Discount, CardHeader, Icon, IconInfo, Price } from './styledComponents';
import { useStyles } from './makeStyles';

const highlightStyleTop = {
  borderTop: '5px solid var(--orange)',
  borderColor: 'var(--orange)',
};

const highlightStyleBottom = {
  borderBottom: '5px solid var(--orange)',
  borderColor: 'var(--orange)',
};

const PlanInfo = ({ classes, styleBuyButton }) => (
  <>
    <Price>
      <InfoText classItem={classes.currentPrice} label={'$ 123,00'} display="inline" />
      <InfoText classItem={classes.discountPrice} label={'$ 123,00'} display="inline" />
    </Price>
    <InfoText classItem={classes.title} label={'equivalente a'} />
    <InfoText classItem={classes.currency} label={'R$'} color="primary" display="inline" />
    <InfoText classItem={classes.price} label={'8,39'} color="primary" display="inline" />
    <InfoText classItem={classes.currency} label={'/mês*'} color="primary" display="inline" />
    <div>
      <BuyButton styleBuyButton={styleBuyButton} />
    </div>
    <div style={{ display: 'inline-flex' }}>
      <InfoText classItem={classes.domain} label={'1 ano de Domínio Grátis'} />
      <IconInfo src={iconInfo} alt="Icon Info" />
    </div>
    <div style={{ display: 'inline-flex' }}>
      <InfoText classItem={classes.domain} label={'economize R$ 174,48'} />
      <Discount>40% off</Discount>
    </div>
  </>
);
const CardPlan = ({ highlightCard, styleBuyButton }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader style={highlightCard ? highlightStyleTop : null}>
        <Icon src={iconPlanP} alt="Icon's Plan" />
        <Typography color="primary" className={classes.planTitle}>
          Plano P
        </Typography>
      </CardHeader>
      <CardContent className={classes.content}>
        <PlanInfo classes={classes} styleBuyButton={styleBuyButton} />
      </CardContent>
      <CardActions style={highlightCard ? highlightStyleBottom : null}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardPlan;
