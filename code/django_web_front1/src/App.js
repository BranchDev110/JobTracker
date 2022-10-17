import "./App.css";
import { AuthProvider } from "./Context/AuthContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignIn from "./Pages/SignIn";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
