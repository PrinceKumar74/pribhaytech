"use client";
import MainContainer  from "./Container1/MainContainer";
import StepProcess from "./Container2/StepProcess";
import OurMission from "./Container3/OurMisson";
import WhyJoin from "./Container4/WhyJoin";
import OurClients from "./Container5/OurClients";
import BusinessStats from "./Container6/BusinessStats";
import Carousel from "./Container7/Carousel";
export default function HomePage() {

  return (
   
    <div className="h-full w-full">
      <MainContainer/>
      <StepProcess/>
      <OurMission/>
      <WhyJoin/>
      <OurClients/>
      <BusinessStats/>
      <Carousel/>
    </div>
 
  );
}
