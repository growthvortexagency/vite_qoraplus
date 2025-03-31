import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'
import PasswordReset from './pages/auth/PasswordReset'
import TermsAndConditions from './pages/TermsAndConditions';


function AppContent() {
  const location = useLocation();

  const noHeaderNavbarRoutes = [
    "/sign-up",
    "/sign-in", 
    "/password-reset", 
    "/terms-and-conditions", 
  ];

  const shouldHideNavbar = noHeaderNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
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
