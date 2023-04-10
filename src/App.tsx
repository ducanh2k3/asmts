import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/userLayout";
import Home from "./components/Home";
import Detail from "./components/detail";
import Signup from "./components/signup";
import Signin from "./components/signin";
import HomeAdmin from "./components/admin";
import Adminupdate from "./components/adminupdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<HomeAdmin />}></Route>{" "}
        <Route path="/updateproduct/:id" element={<Adminupdate />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
