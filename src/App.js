import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

import { Context } from "./context/Context";

import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./pages/About";
import Payment from "./pages/Payment";
import Membership from "./pages/Cards";
import Upgrade from "./pages/AUpgrade";
import PreArrival from "./pages/PreArrival";
import UserDetail from "./pages/UserDetail";
import Homepage from "./pages/Homepage";
import AgentList from "./pages/AList";
import ADBoard from "./pages/ABoard";
import FeedbackForm from "./pages/FeedbackForm";
import StudentTask from "./pages/ATasks";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const { user, token } = useContext(Context);
  // const { closeSidebar } = useContext(SidebarContext)
  // let location = useLocation()

  // useEffect(() => {
  //   closeSidebar()
  // }, [location, closeSidebar])

  return (
    <>
      <ReactNotifications />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <Navbar />
            <Routes>
              {/* Public Routes */}
              <Route
                path="/login"
                element={token && user ? <Login /> : <Login />}
              />
              <Route
                path="/signup"
                element={token && user ? <Signup /> : <Signup />}
              />
              <Route
                path="/aboutus"
                element={token && user ? <About /> : <Login />}
              />
              <Route
                path="/contactus"
                element={token && user ? <ContactUs /> : <ContactUs />}
              />

              {/* Private Routes */}
              <Route
                path="/"
                element={
                  token && user ? (
                    user.accountType === "public" ? (
                      <Homepage />
                    ) : (
                      <ADBoard />
                    )
                  ) : (
                    <Login />
                  )
                }
              />
              <Route
                path="/upgrade"
                element={token && user ? <Upgrade /> : <Login />}
              />
              <Route
                path="/payment"
                element={token && user ? <Payment /> : <Login />}
              />
              <Route
                path="/details"
                element={token && user ? <UserDetail /> : <Login />}
              />
              <Route
                path="/feedback"
                element={token && user ? <FeedbackForm /> : <Login />}
              />
              <Route
                path="/preArrival"
                element={token && user ? <PreArrival /> : <Login />}
              />
              <Route
                path="/membership"
                element={token && user ? <Membership /> : <Login />}
              />

              {/* Other Private Routes */}
              <Route
                path="/agent-list"
                element={token && user ? <AgentList /> : <Login />}
              />
              <Route
                path="/agent-board"
                element={token && user ? <ADBoard /> : <Login />}
              />
              <Route
                path="/tasks"
                element={token && user ? <StudentTask /> : <Login />}
              />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
