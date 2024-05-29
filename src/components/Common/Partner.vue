<template>
    <div class="partner-area">
        <div class="container">
            <div class="partner-slides">
                <carousel :autoplay="5000" :wrap-around="true" :breakpoints="breakpoints">
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="partner-item">
                            <img :src="slide.image" alt="image">
                        </div>
                    </Slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';

import partner1 from '../../assets/images/partner/partner1.png';
import partner2 from '../../assets/images/partner/partner2.png';
import partner3 from '../../assets/images/partner/partner3.png';
import partner4 from '../../assets/images/partner/partner4.png';
import partner5 from '../../assets/images/partner/partner5.png';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
    name: 'Partner',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: partner1,
            },
            {
                id: 2,
                image: partner2,
            },
            {
                id: 3,
                image: partner3,
            },
            {
                id: 4,
                image: partner4,
            },
            {
                id: 5,
                image: partner5,
            },
            {
                id: 6,
                image: partner2,
            },
            {
                id: 7,
                image: partner3,
            },
            {
                id: 8,
                image: partner4,
            },
            {
                id: 9,
                image: partner5,
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 2,
            },
            576: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 5,
                snapAlign: 'left',
            },
        },
    }),
})
</script>