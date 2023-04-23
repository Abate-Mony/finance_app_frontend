import { UserLayout, DashBoardLayout } from "./components";
import { Home, ApplyService, ContactUs, Login, Main, Messages, Info } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/appstore";
import { Provider } from 'react-redux'
import ScrollTo from "./withRouter"
function App() {
  return (
    <div className="bg-color_light min-h-screen text-slate-700 dark:text-white dark:bg-color_dark">
      <BrowserRouter>
        <Provider store={store}>

          <ScrollTo />




          <Routes >


            <Route path="dashboard" element={<DashBoardLayout />}>
              <Route index element={<Main />} />
              <Route path="messages" element={<Messages />} />
            </Route>
            <Route path="auth" element={<Login />} />

            <Route path="/" element={<UserLayout />}>
              <Route index element={<Home />} />
              <Route path="service/:service_id" element={<ApplyService />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="information" element={<Info />} />
            </Route>

          </Routes>
        </Provider>

      </BrowserRouter>
    </div>

  );
}

export default App;
