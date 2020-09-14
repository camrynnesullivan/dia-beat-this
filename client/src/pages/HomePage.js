import React from "react"
import Hero from "../components/Hero"
import WelcomeCard from "../components/WelcomeCard"
import InsulinTimeline from "../components/InsulinTimeline"
import { Typography } from "@material-ui/core"


function HomePage(props) {
  return (
    <div>
      <Hero />
      <WelcomeCard />
      <div>
        <Typography variant="h4" component="h3" style={{textAlign: "center"}}>
          How to take care of yourself in the day to day
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{textAlign: "center"}}>
          Everyday is a new opportunity to get your blood sugar levels right!
          <br/>
          Make sure to talk with your doctor about your specific needs and how often you should be taking insulin and checking your blood sugar levels.
        </Typography>
        <br />
        <br />
      </div>
      <InsulinTimeline />
    </div>
  )
}

export default HomePage
