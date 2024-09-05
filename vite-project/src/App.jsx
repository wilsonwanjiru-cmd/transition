import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import CSStransition from "./components/CSStransition";


import Header from "./components/header";
import Tgroup from "./components/Tgroup";
import Transition from "./components/Transition";


const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">WilsonWanjiru App</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="transition" className="nav-link">
                Transition
              </Link>
            </li>
            <li className="nav-item">
              <Link to="csstransition" className="nav-link">
                CSStransition
              </Link>
            </li>
            <li className="nav-item">
              <Link to="header" className="nav-link">
                Header
              </Link>
            </li>
            <li className="nav-item">
              <Link to="tgroup" className="nav-link">
                Tgroup
              </Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="header" element={<Header />} />
          <Route path="csstransition" element={<CSStransition/>} />
          <Route path="tgroup" element={<Tgroup />} />
          {/* make params more dynamic */}
          <Route path="transition" element={<Transition/>} />
         
          {/* No Route Found */}
          <Route
            path="*"
            element={
              <>
                <h1>Sorry nothing found!</h1>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
