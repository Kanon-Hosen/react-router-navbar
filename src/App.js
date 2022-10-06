import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
