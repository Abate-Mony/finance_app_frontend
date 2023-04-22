import { ChatBtn } from "../components"
import Cookies from "../components/cookies"
import { Advert, ChatBox, Footer, Hero, OurServices, Testimonials } from "../containers"
const Home = () => {
  return (
    <div className="home__wrapper h-screen overflow-y-auto">
      
    {/* <Cookies/> */}
  
      <Hero />
      {/* <Test /> */}
      <Advert />
      <OurServices />
      <Testimonials />
      <Footer />


    </div>
  )
}

export default Home