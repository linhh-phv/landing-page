import { Route, Routes } from "react-router-dom";

// import { Login } from "./Login";
// import { Register } from "./Register";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<div>register</div>} />
      <Route path="login" element={<div>login</div>} />
    </Routes>
  );
};
