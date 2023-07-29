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
import EnrollLayout from "./pages/Layout/enroll-layout";
import { SendSMS } from "./pages/SignUp/SendSMS";
import { VerifyPage } from "./pages/SignUp/Verify";
import { CompletePage } from "./pages/SignUp/Verify/Complete";

const RouteGroup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/friends" element={<Friends />} />
        </Route>
        <Route element={<EnrollLayout />}>
          <Route path="/enroll/steps" element={<EnrollStep />} />
        </Route>
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/meeting/chat" element={<MeetingChat />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUp/sendSMS/:phoneNumber" element={<SendSMS />} />
        <Route path="/signUp/verify/:phoneNumber" element={<VerifyPage />} />
        <Route
          path="/signUp/verify/complete/:phoneNumber"
          element={<CompletePage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteGroup;
