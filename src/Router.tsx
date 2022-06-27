import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

export default function Router() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/lesson/:slug" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}