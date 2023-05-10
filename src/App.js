import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu.jsx';
import Home from "./pages/Home.jsx"
import Page1 from "./pages/Page1.jsx"
import Page2 from "./pages/Page2.jsx"
import Error404 from './pages/Error404.jsx';
import Footer from './components/Footer/Footer.jsx';
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
          <NavMenu />
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
