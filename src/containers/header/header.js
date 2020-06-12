import React from 'react';
import { FormattedMessage } from 'react-intl';
import Somethings from 'assets/img-office-somethings.svg';
import Cowork from 'assets/img-office-cowork.svg';
import iconCheck from 'assets/icon-check.svg';
import btnDown from 'assets/arrow-bottom-scroll.svg';
import {
  WrapHeader,
  ImgLeft,
  Title,
  Subtitle,
  Details,
  CheckIcon,
  Paragraph,
  ImgRight,
  BtnDown,
  ArrowDdown,
} from './styledComponents';

const Header = () => {
  return (
    <div style={{ height: 353 }}>
      <WrapHeader>
        <ImgLeft src={Somethings} alt="" />
        <div>
          <Title>
            <FormattedMessage id="header.title" />
          </Title>
          <Subtitle>
            <FormattedMessage id="header.subtitle" />
          </Subtitle>
          <Details>
            <div className="wrap-paragraph -first">
              <CheckIcon src={iconCheck} />
              <Paragraph>
                <FormattedMessage id="header.availability" />
              </Paragraph>
            </div>
            <div className="wrap-paragraph -second">
              <CheckIcon src={iconCheck} />
              <Paragraph>
                <FormattedMessage id="header.support" />
              </Paragraph>
            </div>
            <div className="wrap-paragraph -third">
              <CheckIcon src={iconCheck} />
              <Paragraph>
                <FormattedMessage id="header.panel" />
              </Paragraph>
            </div>
          </Details>
        </div>
        <ImgRight src={Cowork} alt="" />
      </WrapHeader>
      <ArrowDdown>
        <BtnDown src={btnDown} alt="" />
      </ArrowDdown>
    </div>
  );
};

export default Header;
