import React from "react";
import Header from "../Component/Header";
import Hero from "../Component/Hero";
import School from "../Component/School";
import Popular from "../Component/Popular";
import Interested from "../Component/Interested";
import Giphy from "../Component/Giphy";
import Promotion from "../Component/Promotion";
import Workout from "../Component/Workout";
import Headlines from "../Component/Headlines";
import Footer from "../Component/Footer";

export default function HOME() {
  return (
    <div>
      <Header />
      <Hero />
      <School />
      <Interested />
      <Popular />
      <Giphy />
      <Promotion />
      <Workout/>
      <Headlines/>
      <Footer/>
    </div>
  );
}
