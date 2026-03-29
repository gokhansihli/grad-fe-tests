import { useState } from "react";

export default function LoginPage() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showSignup, setShowSignup] = useState(false);
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(email, password);
        }}
      >
        <h1>Login Form</h1>
        <h3>Email:</h3>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>Password:</h3>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setShowSignup((prev) => !prev)}>Signup?</button>
      {showSignup && (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h3>First Name:</h3>
            <input
              type="text"
              value={signupDetails.firstName}
              placeholder="First Name"
              onChange={(e) =>
                setSignupDetails((details) => {
                  const firstName = e.target.value;
                  const newDetails = { ...details, firstName };
                  return newDetails;
                })
              }
            />
            <h3>Surname:</h3>
            <input
              type="text"
              value={signupDetails.surname}
              placeholder="Surname"
              onChange={(e) =>
                setSignupDetails((details) => {
                  const surname = e.target.value;
                  const newDetails = { ...details, surname };
                  return newDetails;
                })
              }
            />
            <h3>Email:</h3>
            <input
              type="email"
              value={signupDetails.email}
              placeholder="Email"
              onChange={(e) =>
                setSignupDetails((details) => {
                  const email = e.target.value;
                  const newDetails = { ...details, email };
                  return newDetails;
                })
              }
            />
            <h3>Password:</h3>
            <input
              type="password"
              value={signupDetails.password}
              placeholder="Password"
              onChange={(e) =>
                setSignupDetails((details) => {
                  const password = e.target.value;
                  const newDetails = { ...details, password };
                  return newDetails;
                })
              }
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}
