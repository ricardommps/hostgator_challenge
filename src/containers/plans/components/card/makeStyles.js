import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    margin: '1em 0 .5em 0',
  },
  rootFeatured: {
    borderBottom: '0',
    borderRadius: '0',
  },
  footer: {
    display: 'block',
    padding: '1.625rem',
    alignItems: 'start',
    textAlign: 'start',
  },
  textFooter: {
    fontSize: '1rem',
    marginBottom: '0.3125rem',
    width: 'fit-content',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 0.125rem',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '0.875rem',
  },
  planTitle: {
    fontWeight: '700',
    fontSize: '1.625rem',
  },
  currency: {
    fontSize: '1.25rem',
    fontWeight: '400',
  },
  domain: {
    fontWeight: '700',
    color: '#333',
    marginBottom: '0.75rem',
  },
  economy: {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: 'var(--blue5)',
  },
  price: {
    fontWeight: '700',
    fontSize: '2.1875rem',
    marginLeft: '.5rem',
  },
  currentPrice: {
    fontSize: '0.875rem',
    marginRight: '.5rem',
    textDecoration: 'line-through',
  },
  discountPrice: {
    fontSize: '0.875rem',
    fontWeight: '700',
  },
  pos: {
    marginBottom: '0.75rem',
  },
  featuredText: {
    display: 'block',
    width: '100%',
    height: '0.875rem',
    padding: '0.3125rem 0.875rem',
    backgroundColor: '#ff8034',
    color: '#fff',
    fontSize: '0.6875rem',
    lineHeight: '0.9375rem',
    fontWeight: '500',
    borderTopLeftRadius: '0.3125rem',
    borderTopRightRadius: '0.3125rem',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  },

  featuredTextBottom: {
    display: 'block',
    width: '100%',
    height: '0.875rem',
    padding: '0.3125rem 14px',
    backgroundColor: '#ff8034',
    color: '#fff',
    fontSize: '0.6875rem',
    lineHeight: '0.9375rem',
    fontWeight: '500',
    borderBottomLeftRadius: '0.3125rem',
    borderBottomRightRadius: '0.3125rem',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
  },
  content: {
    borderTop: '1px solid #dfecff',
    borderBottom: '1px solid #dfecff',
    textAlign: 'center',
  },
});
