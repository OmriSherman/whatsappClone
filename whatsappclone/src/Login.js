import React from "react";

const Login = (props) => {
  const {
    userNameError,
    passwordError,
    handleLogin,
    handleSignup,
    userName,
    setUserName,
    password,
    setPassword,
    hasAccount,
    setHasAccount,
    setName,
    name
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        {!hasAccount ? (
          <div>
            <label>Full Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}
        <label>Username</label>
        <input
          autoFocus
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p className="errorMsg">{userNameError}</p>
        <label>Password</label>
        <input
        type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign in</button>
              <p>
                Don't have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign up</button>
              <p>
                Have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
