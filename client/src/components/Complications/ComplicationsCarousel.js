import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "@material-ui/core/Card";
import { ComplicationsCard } from "./ComplicationsCards";
import { makeStyles } from "@material-ui/core/styles";
import { complications } from "../../research";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
  },
}))

export default function ComplicationsCarousel() {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Carousel>
              {
                  complications.listOfComps.map( (complication, i) => <ComplicationsCard key={i} name={complication.name} description={complication.description} recommendation={complication.recommendation} video={complication.video} image={complication.image} imageText={complication.imageText}/> )
              }
      </Carousel>
    </Card>
  );
}
