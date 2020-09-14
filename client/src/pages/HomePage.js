import React from "react";
import Hero from "../components/Hero";
import WelcomeCard from "../components/WelcomeCard";
import InsulinTimeline from "../components/InsulinTimeline";

function HomePage(props) {
  return (
    <div>
      <Hero />
      <WelcomeCard />
      <InsulinTimeline />
    </div>
  );
}

export default HomePage;
