import React from "react";
import Carousel from "react-material-ui-carousel";
import { ComplicationsCard } from "./ComplicationsCards";

export default function ComplicationsCarousel() {
  return (
    <Carousel>
      <ComplicationsCard />
    </Carousel>
  );
}
