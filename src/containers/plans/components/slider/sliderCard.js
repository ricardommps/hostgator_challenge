import React, { memo } from 'react';
import Slider from 'react-slick';
import CardPlan from '../card/cardPlan';
import ArrowButton from './arrowButton';
import { WrapSlider } from './styledComponents';
import iconArrowNext from 'assets/icon-arrow-next.svg';
import iconArrowPrev from 'assets/icon-arrow-prev.svg';
import iconPlanP from 'assets/icon-plan-p.svg';
import iconPlanM from 'assets/icon-plan-m.svg';
import iconPlanTurbo from 'assets/icon-plan-turbo.svg';

const styleBuyButton = {
  backgroundColor: 'var(--blue4)',
  color: 'var(--white)',
};

const styleBuyButtonHighlight = {
  backgroundColor: 'var(--orange)',
  color: 'var(--white)',
};

const SliderCard = ({ plans, cycleSelected, loading }) => {
  const settings = {
    className: 'slider variable-width center',
    variableWidth: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    nextArrow: <ArrowButton icon={iconArrowNext} className="-prev" />,
    prevArrow: <ArrowButton icon={iconArrowPrev} className="-next" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <WrapSlider>
      <>
        <Slider {...settings}>
          <CardPlan
            featured={false}
            styleBuyButton={styleBuyButton}
            plan={plans?.planoP}
            cycleSelected={cycleSelected}
            icon={iconPlanP}
          />
          <CardPlan
            featured={true}
            styleBuyButton={styleBuyButtonHighlight}
            plan={plans?.planoM}
            cycleSelected={cycleSelected}
            icon={iconPlanM}
          />
          <CardPlan
            featured={false}
            styleBuyButton={styleBuyButton}
            plan={plans?.planoTurbo}
            cycleSelected={cycleSelected}
            icon={iconPlanTurbo}
          />
        </Slider>
      </>
    </WrapSlider>
  );
};

export default memo(SliderCard);
