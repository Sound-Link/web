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
import MeetingCreate from "./pages/Meeting/Create";
import MeetingDetail from "./pages/Meeting/Detail";
import EnrollLayout from "./pages/Layout/enroll-layout";
import { SendSMS } from "./pages/SignUp/SendSMS";
import { VerifyPage } from "./pages/SignUp/Verify";
import { CompletePage } from "./pages/SignUp/Verify/Complete";
import { DetailLayout } from "./pages/Layout/detail-layout";

const RouteGroup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Meeting />} />
          <Route path="/test" element={<Test />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/meeting/:id" element={<MeetingChat />} />
          <Route path="/meeting/create" element={<MeetingCreate />} />
        </Route>
        <Route element={<DetailLayout />}>
          <Route path="/meeting/detail/:roomId" element={<MeetingDetail />} />
        </Route>
        <Route element={<EnrollLayout />}>
          <Route path="/enroll/steps" element={<EnrollStep />} />
        </Route>
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
