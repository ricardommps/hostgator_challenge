import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 0.125rem',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  planTitle: {
    fontWeight: '700',
  },
  currency: {
    fontSize: 20,
    fontWeight: '400',
  },
  domain: {
    fontWeight: '700',
    color: '#333',
  },
  price: {
    fontWeight: '700',
    fontSize: 35,
    marginLeft: '.5rem',
  },
  currentPrice: {
    fontSize: 14,
    marginRight: '.5rem',
    textDecoration: 'line-through',
  },
  discountPrice: {
    fontSize: 14,
    fontWeight: '700',
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    borderTop: '1px solid #dfecff',
    borderBottom: '1px solid #dfecff',
    borderLeft: '1px solid #dfecff',
    borderRight: '1px solid #dfecff',
    textAlign: 'center',
  },
});
