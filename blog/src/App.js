import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const user = true;
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Register />} />
          <Route path="/post/:id" element={<Single />} />

          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />


        </Routes>
      </div>
    </Router>

  );
}

export default App;
