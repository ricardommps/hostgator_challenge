import styled from 'styled-components';

export const Featured = styled.div`
  top: 0px;
  display: block;
  position: relative;
  width: 100%;
  text-align: center;
  font-weight: 300;
  font-size: 0.75rem;
  z-index: 3;
`;
export const Discount = styled.div`
  margin-left: 0.375rem;
  padding: 0.1875rem 0.375rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  background: #51c99c;
  border-radius: 1rem;
`;
export const CardHeader = styled.div`
  background: var(--white);
  border-top: 1px solid var(--blue1);
  border-left: 1px solid var(--blue1);
  border-right: 1px solid var(--blue1);
  padding: 1.5rem;
  border-radius: 0.25rem 0.25rem 0 0;
  text-align: center;
`;

export const Icon = styled.img`
  width: 2.625rem;
  height: 2.4375rem;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const IconInfo = styled.img`
  width: 0.9375rem;
  height: 0.9375rem;
  margin-top: 0.25rem;
  margin-left: 0.3125rem;
`;

export const Price = styled.div`
  color: #333;
`;

export const WrapCard = styled.div`
  width: 20.6875rem;
  margin: 0 0.5rem;
  @media (max-width: 767px) {
    width: 18.125rem;
  }
`;
