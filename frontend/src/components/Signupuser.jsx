import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signupuser = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    console.log("clicked", user);
    axios
      .post("http://localhost:4000/user/signup", user) 
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        navigate("/viewemployees"); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        backgroundImage:`url('https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "35ch",
            borderRadius: "10px",
            "& input": {
              color: "white",
            },
            "& input::placeholder": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          },
          bgcolor: "rgba(255, 255, 255, 0.2)",
          p: 4,
          borderRadius: "20px",
          textAlign: "center",
          height: "540px",
          width: "400px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="h4"
          style={{ color: "white", marginBottom: "20px" }}
        >
          User SignUp
        </Typography>
        <div style={{ marginBottom: "20px" }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            onChange={inputHandler}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            onChange={inputHandler}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            onChange={inputHandler}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            onChange={inputHandler}
          />
        </div>
        <Button variant="contained" color="primary" onClick={addHandler}>
          Signup
        </Button>
      </Box>
    </div>
  );
};

export default Signupuser;
