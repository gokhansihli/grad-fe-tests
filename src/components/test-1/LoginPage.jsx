import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showSignup, setShowSignup] = useState(false);
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
  });

  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");
  const [firstNameError, setFirstnameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginSuccess, setLoginSuccess] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");

  const handleLogin = () => {
    let isLoginValid = true;
    if (!email) {
      setLoginEmailError("Required");
      isLoginValid = false;
    } else if (!email.includes("@")) {
      setLoginEmailError("Invalid Email");
      isLoginValid = false;
    } else setLoginEmailError("");
    if (!password) {
      setLoginPasswordError("Required");
      isLoginValid = false;
    } else if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setLoginPasswordError(
        "Week Password! Must include at least 8 characters, one uppercase letter, one lowercase letter, and one number.",
      );
      isLoginValid = false;
    } else setLoginPasswordError("");

    if (isLoginValid) {
      setLoginSuccess("Login Successful!");
      setEmail("");
      setPassword("");
    } else {
      setLoginSuccess("");
    }
  };

  const handleSignup = () => {
    let isSignupValid = true;
    const { firstName, surname, email, password } = signupDetails;
    if (!firstName) {
      setFirstnameError("Required");
      isSignupValid = false;
    } else setFirstnameError("");
    if (!surname) {
      setSurnameError("Required");
      isSignupValid = false;
    } else setSurnameError("");
    if (!email) {
      setEmailError("Required");
      isSignupValid = false;
    } else if (!email.includes("@")) {
      setEmailError("Invalid Email");
      isSignupValid = false;
    } else setEmailError("");
    if (!password) {
      setPasswordError("Required");
      isSignupValid = false;
    } else if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setPasswordError(
        "Week Password! Must include at least 8 characters, one uppercase letter, one lowercase letter, and one number.",
      );
      isLoginValid = false;
    } else setPasswordError("");

    if (isSignupValid) {
      setSignupSuccess("Sign Up Successful!");

      setSignupDetails({
        firstName: "",
        surname: "",
        email: "",
        password: "",
      });

      setFirstnameError("");
      setSurnameError("");
      setEmailError("");
      setPasswordError("");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h1>Login Form</h1>
        <h3>Email:</h3>
        <input
          type="text"
          value={email}
          placeholder="Email"
          //   required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {loginEmailError && <p style={{ color: "red" }}>{loginEmailError}</p>}

        <h3>Password:</h3>
        <input
          type="password"
          value={password}
          placeholder="Password"
          //   required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {loginPasswordError && (
          <p style={{ color: "red" }}>{loginPasswordError}</p>
        )}

        <button type="submit">Submit</button>
        {loginSuccess && <p style={{ color: "green" }}>{loginSuccess}</p>}
      </form>
      <button onClick={() => setShowSignup((prev) => !prev)}>Sign Up?</button>
      {showSignup && (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
          >
            <h3>First Name:</h3>
            <input
              type="text"
              value={signupDetails.firstName}
              placeholder="First Name"
              //   required
              onChange={(e) =>
                setSignupDetails((details) => {
                  const firstName = e.target.value;
                  const newDetails = { ...details, firstName };
                  return newDetails;
                })
              }
            />
            {firstNameError && <p style={{ color: "red" }}>{firstNameError}</p>}

            <h3>Surname:</h3>
            <input
              type="text"
              value={signupDetails.surname}
              placeholder="Surname"
              //   required
              onChange={(e) =>
                setSignupDetails((details) => {
                  const surname = e.target.value;
                  const newDetails = { ...details, surname };
                  return newDetails;
                })
              }
            />
            {surnameError && <p style={{ color: "red" }}>{surnameError}</p>}
            <h3>Email:</h3>
            <input
              type="text"
              value={signupDetails.email}
              placeholder="Email"
              //   required
              onChange={(e) =>
                setSignupDetails((details) => {
                  const email = e.target.value;
                  const newDetails = { ...details, email };
                  return newDetails;
                })
              }
            />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}

            <h3>Password:</h3>
            <input
              type="password"
              value={signupDetails.password}
              placeholder="Password"
              //   required
              onChange={(e) =>
                setSignupDetails((details) => {
                  const password = e.target.value;
                  const newDetails = { ...details, password };
                  return newDetails;
                })
              }
            />
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

            <button type="submit">Submit</button>
            {signupSuccess && <p style={{ color: "green" }}>{signupSuccess}</p>}
          </form>
        </>
      )}
    </div>
  );
}
