import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "@material-ui/core/Card";
import { ComplicationsCard } from "./ComplicationsCards";

import { complications } from "../../research";

export default function ComplicationsCarousel() {
  return (
    <Card>
    <Carousel>
      
            {
                complications.listOfComps.map( (complication, i) => <ComplicationsCard key={i} name={complication.name} description={complication.description} recommendation={complication.recommendation} video={complication.video} image={complication.image} imageText={complication.imageText}/> )
            }
    </Carousel>
    </Card>
  );
}
