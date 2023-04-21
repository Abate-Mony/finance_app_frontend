import { ChatBtn } from "../components"
import { Advert, ChatBox, Footer, Hero, OurServices, Testimonials } from "../containers"
const Home = () => {
  return (
    <div>
      <ChatBtn />
      <ChatBox />
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