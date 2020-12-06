import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';

//Remove this library and try:

//https://www.npmjs.com/package/react-material-ui-carousel

const CustomCarousel = (props) => {
    return <AutoRotatingCarousel
    label='Get started'
    open={true}
    autoplay={true}
    >
        {props.slides.map((i, slide) => {
            return (
                <Slide key={i}
      media={<img src={slide.img} />}
      mediaBackgroundStyle={{ backgroundColor: "lightblue" }}
      style={{ backgroundColor: "lightblue" }}
      title={slide.title}
      subtitle={slide.subtitle}
    />
            )
        })}

    </AutoRotatingCarousel>
}

export default CustomCarousel;