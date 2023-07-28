import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Meeting from "./pages/Meeting";
import Friends from "./pages/Friends";
import Enroll from "./pages/Enroll";
import EnrollStep from "./pages/Enroll/Steps/index";
import PrivateLayout from "./pages/Layout/private-layout";
import MeetingChat from "./pages/Meeting/Chat";
import { SendSMS } from "./pages/SignUp/SendSMS";

const RouteGroup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/enroll/steps" element={<EnrollStep />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/meeting/chat" element={<MeetingChat />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp/sendSMS/:phoneNumber" element={<SendSMS />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteGroup;
