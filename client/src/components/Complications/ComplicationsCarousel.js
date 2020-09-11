import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { HeartCard, KidneyCard, EyeCard, NeuroCard, GumCard } from "./ComplicationsCards";
import { Card } from '@material-ui/core';
 
export default function ComplicationsCarousel() {
    return (
        <Carousel>
            <HeartCard />
            <KidneyCard />
            <EyeCard />
            <NeuroCard />
            <GumCard />
        </Carousel>
    )
}