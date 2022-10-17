import './App.css';
import { AuthProvider } from './Context/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';

import SignIn from './Pages/SignIn';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route 
          exact
          path="/signin"
          element={<SignIn />}
        />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
