import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SignUp from './pages/SignUp'


function AppContent() {
  const location = useLocation();

  const noHeaderNavbarRoutes = [
    "/sign-up",
  ];

  const shouldHideNavbar = noHeaderNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

function App() {

  return (
    <Router>
        <AppContent />
    </Router>
  );
}

export default App
