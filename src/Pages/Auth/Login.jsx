import React, { useEffect, useState } from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import { clearLoginState, loginUser } from "../../store/login/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  let auth = localStorage.getItem("admin-token");

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = undefined;

    if (phoneNumber === "") {
      error = "Please enter phone number";
    } else if (password === "") {
      error = "Please enter password";
    }

    if (error) {
      toast.error(error);
    } else {
        dispatch(loginUser({ phone: phoneNumber, password }));
    }
  };

  const { loginSuccess, loginError, loginErrorMessage } = useSelector((state) => state.userSlice);

  useEffect(() => {
    dispatch(clearLoginState());
  }, []);

  useEffect(() => {
    if (loginError) {
      toast.error(loginErrorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearLoginState());
    }

    if (loginSuccess) {
      dispatch(clearLoginState());
      navigate("/");
    }
    if (auth) {
        navigate("/");
    }
  }, [loginError, loginSuccess]);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "90vh" }}>
      <Form style={{ width: "30%" }} onSubmit={handleSubmit}>
        <Form.Label className="mb-4" style={{ fontSize: "35px", fontWeight: "bold" }}>
          Login
        </Form.Label>
        <Form.Group className="mb-3" controlId="formGroupphone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="Number" placeholder="Enter phone number" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </Form.Group>
        <Form.Group className="mt-4" controlId="formGroupbutton">
          <button style={{ width: "30%", outline: "none", border: "none" }} className="p-2 rounded-2 btn btn-primary" type="submit">
            Login
          </button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
