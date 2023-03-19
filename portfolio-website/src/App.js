import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import {NavLink} from "react-router-dom";

import SIG from './pages/SIG'
import Orbit from './pages/Orbit'
import Notes from './pages/Notes'
import FX from './pages/FX'
import NotFound from './pages/NotFound'

function Header(props) {
  return (
    <>
      <div className = "navBar">
        <NavLink className = "navItem" to="/">Home</NavLink>
        <NavLink className = "navItem" to="/synthetic-instrument-generation">SIG</NavLink>
        <NavLink className = "navItem" to="/orbit">Orbit</NavLink>
        <NavLink className = "navItem" to="/korg-minilogue-XD-fx">Korg FX</NavLink>
      </div>
    </>
  )
}

function DownloadCV(props) {
  return (
    <>
      <div className = "downloadCV">
          <a href="./resume.pdf" download>Resume</a>
      </div>
    </>
  )
}

function Home(props) {
  return (
    <>
      <div className = "textBodyHome">
        <h1>
          Bradly Landucci
        </h1>
        <DownloadCV/>
      </div>
      {/* <div class="container">
        <div class="box">Test</div>
        <div class="box">Test2</div>
      </div> */}
    </>
  )
}

function App() {
  return (
    <>
      <div>
        {/* https://codepen.io/P1N2O/embed/pyBNzX?height=316&theme-id=0&default-tab=result */}
        <div className="d-flex flex-column justify-content-center w-100 h-100">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="btn-group my-5">
            </div>
          </div>
      <Router>
        <Header/>
        <Routes>
            <Route exact path = "/" element = {<Home/>} />
            <Route exact path = "/synthetic-instrument-generation" element = {<SIG/>} />
            <Route exact path = "/orbit" element = {<Orbit/>} />
            <Route exact path = "/release-notes" element = {<Notes/>} />
            <Route exact path = "/korg-minilogue-XD-fx" element = {<FX/>} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
      </Router>
      </div>
      </div>
    </>
  );
}

export default App;
