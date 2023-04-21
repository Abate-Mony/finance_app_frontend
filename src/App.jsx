import { Navbar } from "./components";
import { Home } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/appstore";
import {Provider} from 'react-redux'
function App() {
  return (
    <div className="bg-color_light min-h-screen text-slate-700 dark:text-white dark:bg-color_dark">
      <BrowserRouter>
      <Provider store={store}>
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route path="/user" element={<h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>} />
        </Routes>
      </Provider>
        
      </BrowserRouter>
    </div>

  );
}

export default App;
