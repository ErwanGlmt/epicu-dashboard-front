import React, { useState } from "react";
import axios from "axios";
import Login from "./components/Auth/Login";
import AppRouter from "./AppRouter";
axios.defaults.baseURL = "http://localhost:5000";
const App = () => {
  const [user, setUser] = useState({ auth: false, name: "" });
  return (
    <div className="App">
      {user.auth ? (
        <AppRouter user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
};
export default App;
