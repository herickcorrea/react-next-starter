import React, { Component } from "react";
import Swiper from 'react-id-swiper';
import Imagem from "../components/Imagem";

import 'swiper/css/swiper.css';

// Documentation:
// https://www.npmjs.com/package/react-id-swiper

const SimpleSwiper = (props) => {

    const params = {
        pagination: false,
        navigation: false,
        grabCursos: true,
        slidesPerView: 1, 
        spaceBetween: 0,
        autoplay: true,
        loop: true,
        speed: 2000,
        delay: 5000,
    }

    return (
        <Swiper {...params}>
            {
                props.slide.map((banner,key) =>
                    <div key={key}>
                        <Imagem classes="imgLazyLoad" image={banner.portrait} thumbnail={banner.thumbnail} />
                    </div>
                )
            }
        </Swiper>
    )
}

export default SimpleSwiper;