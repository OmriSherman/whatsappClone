
import "./App.css";
import { useState, useEffect } from "react";
import Login from "./Login";
import TopBar from "./TopBar";
import axios from "axios";

function App() {
  const [usersDB, setUsersDB] = useState([]);
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const [name, setName] = useState("");

  useEffect(()=> {
    axios.get('http://localhost:8002/users')
    .then((data)=>setUsersDB(data.data));
  },[])

  const clearErrors = () => {
    setUserNameError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
      var exists = usersDB.filter((user) => {
        return user.userName == userName;
      })
      if(exists.length > 0) {
      if(exists[0].password==password) 
      {
        setUser(exists[0].userName)
        sessionStorage.setItem("user",user);
      } else {
        setPasswordError("password is incorrect")
        setPassword("")
      }
    } else {
      setUserNameError("username does not exist")
      setUserName("")
    }
  };

  const handleSignup = () => {
    clearErrors();
    let newUser = {
      name: name,
      userName: userName,
      password: password
    }
    axios.post('http://localhost:8002/users',newUser)
    .then(()=> {
      alert("user added");
      setHasAccount(!hasAccount);
      setUserName(userName);
      setPassword(password)
    })
  };

  const handleLogout = () => {
    window.location.href="/";
  };
  return (
    <div className="App">
      {user ? (
         <TopBar handleLogout={handleLogout}/>
      ): (
      <Login
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        userNameError={userNameError}
        passwordError={passwordError}
        setName={setName}
        name={name}
      /> )}
     
    </div>
  );
}

export default App;
