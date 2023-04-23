import { ChatBtn, Navbar } from "./components";
import { Home, ApplyService ,ContactUs} from "./pages";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { store } from "./store/appstore";
import { Provider } from 'react-redux'
import { ChatBox } from "./containers";
import ScrollTo from "./withRouter"
function App() {
  return (
    <div className="bg-color_light min-h-screen text-slate-700 dark:text-white dark:bg-color_dark">
      <BrowserRouter>
        <Provider store={store}>

          <Navbar />
          <ChatBtn />
          <ChatBox />
          <ScrollTo />
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/service/:service_id" element={<ApplyService />} />
            <Route path="/contact-us" element={<ContactUs />} />
            
          </Routes>
        </Provider>

      </BrowserRouter>
    </div>

  );
}

export default App;
