import {lazy,Suspense} from 'react'
import { UserLayout, DashBoardLayout ,Loader} from "./components";
import {MessageBox,Messages,Home} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTo from "./withRouter"
// const Home=lazy(()=>import("./pages/Home"));
const Aboutus=lazy(()=>import("./pages/Aboutus"));
const ContactUs=lazy(()=>import("./pages/Contact"));
const Login=lazy(()=>import("./pages/Login"));
const ApplyService=lazy(()=>import("./pages/ApplyService"));
const Appointment=lazy(()=>import("./pages/Appointment"));
const SingleService=lazy(()=>import("./pages/SingleService"));
const Services=lazy(()=>import("./pages/Services"));
const AppointmentSingle=lazy(()=>import("./pages/AppointmentSingle"));

function App() {
  return (
    <div className="bg-color_light min-h-screen text-slate-700 dark:text-white dark:bg-color_dark">
        {/* <Provider store={store}> */}
      <BrowserRouter>
          <ScrollTo />
          <Suspense fallback={<Loader/>}>
          <Routes >
            <Route path="dashboard" element={<DashBoardLayout />}>
              <Route  index element={<Appointment />} />
              <Route path="messages" element={<Messages />} />
              <Route path="messages/:id" element={<MessageBox />} />
              <Route path="services" element={<Services />} />
              <Route path="services:/id" element={<SingleService/>} />
              <Route path="appointment/:id" element={<AppointmentSingle />} />
              
            </Route>
            <Route path="/" element={<UserLayout />}>
            <Route path="auth" element={<Login />} />
              <Route index element={<Home />} />
              <Route path="service/:service_id" element={<ApplyService />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="about-us" element={<Aboutus />} />
              {/* <Route path="information" element={<Info />} /> */}
            </Route>

          </Routes>

          </Suspense>
      </BrowserRouter>
        {/* </Provider> */}
    </div>

  );
}

export default App;
