import styled from 'styled-components';

export const WrapHeader = styled(
  styled.header({
    position: 'relative',
    textAlign: 'center',
    padding: '2rem 0.9375rem',
    color: 'var(--white)',
  })
)`
  @media screen and (max-width: 768px) {
    padding: 1rem 0.9375rem;
  }
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding-top: 6rem;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(#1d5297, #1d5297);
    @media screen and (max-width: 768px) {
      -webkit-clip-path: ellipse(300% 90% at 30% 10%);
      clip-path: ellipse(300% 90% at 30% 10%);
    }

    @media screen and (min-width: 1200px) {
      height: 80%;
      -webkit-clip-path: ellipse(158% 90% at 30% 10%);
      clip-path: ellipse(-350% 70% at 60% 0%);
    }
  }
`;
export const ImgLeft = styled.img`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const ImgRight = styled.img`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  color: #b9d0ef;
`;

export const Subtitle = styled.h1`
  margin-top: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2ch;
`;

export const CheckIcon = styled.img`
  display: inline;
  margin-right: 0.5rem;
`;

export const Paragraph = styled.p`
  display: inline;
  margin-right: 0.5rem;
`;

export const Details = styled.div`
    text-align: center;
    @media screen and (min-width: 768px) {
      margin-bottom: 6rem;
    }
    .wrap-paragraph {
      margin-bottom: 1rem;
      color: #b9d0ef;
      &.-first {
        padding: 0 3rem;
      }
  
      @media screen and (min-width: 768px) {
        margin-bottom: 1.5rem;
  
        &.-second {
          display: inline-block;
          width: 48%;
          text-align: right;
        }
  
        &.-third {
          display: inline-block;
          width: 50%;
          text-align: left;
          margin-left: 0.625rem;
        }
      }
  `;

export const BtnDown = styled.img`
  position: relative;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 1200px) {
    top: -7rem;
  }
`;

export const ArrowDdown = styled.div`
  animation: bounce 0.5s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-iteration-count: infinite;
`;
