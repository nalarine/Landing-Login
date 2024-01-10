import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import ImageUpload from "./components/imageUpload";
import CreateAnAccount from "./components/CreateAnAccount";
import CreateProfileModule from "./components/CreateProfileModule";
import Main from "./Main";
import AboutPage from "./pages/AboutUs/AboutPage";
import ContactPage from "./pages/ContactUs/ContactPage";
import Feedback from "./pages/Feedback/Feedback";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <Router>
      <div>
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="App">
            <Routes>
              {/* The Main route is placed first */}
              <Route path="/Main" element={<Main />} />
              <Route path="/Create" element={<CreateAnAccount />} />
              <Route path="/CreateProfileModule" element={<CreateProfileModule />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path="/AboutPage" element={<AboutPage />} />
              <Route path="/ContactPage" element={<ContactPage />} />
              <Route path="/Feedback" element={<Feedback />} />
              {/* If none of the above routes match, redirect to Main */}
              
              <Route
                path="/*"
                element={isLoggedIn === "true" ? <Login />:<Main />}/>
            </Routes>
            {/* <ImageUpload/> */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
