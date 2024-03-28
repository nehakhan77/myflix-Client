import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Import statement to indicate that you need to bundle `./index.scss`
import "./login-view.scss";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //useState accepts an initial state and returns two values: The current state & A function that updates the state.

  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch(
      `https://careerfoundry-movieflix-59ee318aca62.herokuapp.com/login?Username=${username}&Password=${password}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    ////callback for the onSubmit event of form was added. This callback tells the Login API to validate username and password. React onSubmit is an event handler that triggers when a form is submitted. It is one of the form events that sends the input data to the handleSubmit function to utilize that information.
   <Form onSubmit={handleSubmit} className="login_form">
      <h1 className="login_heading text-center display-1">MyFlix</h1>
      <br />
      <h3 className="login_heading text-center">
        Log in to your account below
      </h3>
      <br />
      <p className="login_heading text-center">
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3"
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginView;
