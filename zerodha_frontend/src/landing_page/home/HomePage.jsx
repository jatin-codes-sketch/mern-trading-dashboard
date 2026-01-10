import HeroSection from "./HeroSection"
import Awards from "./Awards"
import Education from "./Education"
import Pricing from "./Pricing"
import Stats from "./Stats"
import OpenAccount from "../OpenAccount"


const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
    </>
  )
}

export default HomePage