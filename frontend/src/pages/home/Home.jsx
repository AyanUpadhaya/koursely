import React from "react";
import Hero from "./Hero";
import TopCategories from "./TopCategories";
import FeaturedCourses from "./FeaturedCourses";
import LearnSection from "./LearnSection";
import BecomeAnInstrructor from "./BecomeAnInstrructor";
import FrontReviews from "./FrontReviews";

const Home = () => {
  return (
    <div className="h-full">
      <Hero></Hero>
      <TopCategories></TopCategories>
      <FeaturedCourses></FeaturedCourses>
      <LearnSection></LearnSection>
      <FrontReviews></FrontReviews>
      <BecomeAnInstrructor></BecomeAnInstrructor>
    </div>
  );
};

export default Home;
