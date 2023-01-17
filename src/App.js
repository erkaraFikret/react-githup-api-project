import { Route, Routes } from "react-router-dom";
import "./App.css"
import Logo from "./components/logo/Logo";
import UserInfo from "./pages/UserInfo";

import Users from "./pages/Users";

function App() {
  return (
    <div className="container">
      <Logo />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:name" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
