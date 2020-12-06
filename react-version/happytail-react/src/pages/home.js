import React, { PureComponent } from 'react'
import {ContainerComponent} from "../components/containers/StylizedContainer";
import CustomCarousel from "../components/Carousel";
import {heroSlideData} from "../data/carouselData";
const HomePage = () => {
    return (
        <div>
            <CustomCarousel slides={heroSlideData} />
            <ContainerComponent/>
        </div>
    )
}

export default HomePage