import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Loginuser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    axios
      .post("http://localhost:4000/auth/user/login", user)
      .then((res) => {
        if (res.data.message === "User login success") {
          navigate("/viewemployees");
    
        } else {
          alert(res.data.message);
        }
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
            "& input::placeholder": {
              color: "white",
            },
            border: "1px solid white",
            borderColor: "white",
          },
          bgcolor: "rgba(255, 255, 255, 0.2)",
          p: 4,
          borderRadius: "20px",
          textAlign: "center",
          height: "400px",
          width: "400px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="h4"
          style={{ color: "white", marginBottom: "20px" }}
        >
          {" "}
          User Login
        </Typography>
        <div>
          <TextField
            id="outlined-required-email"
            label="Username"
            name="username"
            InputLabelProps={{ style: { color: "white" } }}
            inputProps={{ style: { color: "white" } }}
            onChange={inputHandler}
          />
        </div>
        <div>
          <TextField
            id="outlined-required-password"
            label="Password"
            name="password"
            type="password"
            InputLabelProps={{ style: { color: "white" } }}
            inputProps={{ style: { color: "white" } }}
            onChange={inputHandler}
          />
        </div>
        <Button variant="contained" color="primary" onClick={addHandler}>
          Login
        </Button>
        <Typography
          variant="body2"
          style={{ marginTop: "20px", color: "white" }}
        >
          Don't have an account?{" "}
          <Link component={RouterLink} to="/signup" style={{ color: "white" }}>
            Signup
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Loginuser;
