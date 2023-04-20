import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-color_light min-h-screen text-slate-700 dark:text-white dark:bg-color_dark">
      <BrowserRouter>
      <Navbar />
      
        <Routes>
          <Route path="/user" element={<h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
