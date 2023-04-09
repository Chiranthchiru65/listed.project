import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Row, Button, Form, Input, Col } from "antd";
import { GoogleOutlined, AppleFilled } from "@ant-design/icons";
import axios from "axios";
import PropTypes from "prop-types";
// import SecondPage from "./secondPage.js";
import SecondPage from "./secondPage";

function SignUp({ setToken }) {
  // const callAPI = () => {

  // const options = {
  //   method: "GET",
  //   url: "https://youtube-search-and-download.p.rapidapi.com/search",
  //   params: {
  //     query: "rick roll",
  //     next: "EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D",
  //     hl: "en",
  //     gl: "US",
  //     upload_date: "t",
  //     type: "v",
  //     duration: "s",
  //     features: "li;hd",
  //     sort: "v",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "c542c794b3msh83a16ab739f7961p17fc24jsn944479ce0a50",
  //     "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // };
  // useEffect(() => {
  //   callAPI();
  // });
  const props = {
    name: "signup",
    initialValues: "",
    autoComplete: "off",
  };
  async function loginUser(credentials) {
    return fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => {
      const res = data.json();
      // const res = data.json();
      console.log(res);
    });
  }
  const onFinish = async (values) => {
    console.log(values);

    // const encodedParams = new URLSearchParams();
    // // encodedParams.append("api_key", "394e9338b73a9f061b1968ceaa050a");
    // encodedParams.append("email", values?.email);
    // encodedParams.append("password", values?.password);
    //  e.preventDefault();
    const email = values?.email;
    const password = values?.password;
    const token = await loginUser({
      email,
      password,
    });
    setToken = token;
  };
  return (
    <>
      <Row>
        <div
          style={{
            background: "#000",
            width: "35vw",
            height: "100vh",
            padding: "0",
            marginLeft: "-10px",
            marginTop: "-10px",
          }}
        >
          <center>
            <div
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "50px",
                paddingTop: "37vh",
              }}
            >
              Board.
            </div>
          </center>
        </div>

        <div
          style={{
            width: "60vw",
            height: "100vh",
          }}
        >
          <div style={{ margin: "21vh 0 0 200px" }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "36px",
              }}
            >
              Sign In
            </div>
            <div
              style={{
                fontWeight: "normal",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Sign in to your account
            </div>
            <Row style={{ marginTop: "20px" }}>
              <Button className="sign-in-with-btn">
                {" "}
                <GoogleOutlined />
                Sign in with Google
              </Button>
              <Button
                className="sign-in-with-btn"
                style={{ marginLeft: "30px" }}
              >
                <AppleFilled />
                Sign in with Apple
              </Button>
            </Row>
            <div
              style={{
                marginTop: "20px",
                height: "320px",
                width: "450px",
                background: "#fff",
                borderRadius: "10px",
              }}
            >
              <Form
                layout="vertical"
                style={{ padding: "30px" }}
                {...props}
                onFinish={onFinish}
              >
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username",
                    },
                  ]}
                >
                  <Input className="inputs" autoComplete="off" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password",
                    },
                  ]}
                >
                  <Input.Password className="inputs" autoComplete="off" />
                </Form.Item>
                <div style={{ color: "lightBlue", margin: "10px 0 10px 0" }}>
                  Forgot Password?
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="inputs"
                    style={{
                      background: "#000",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      <SecondPage />;
                    }}
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
              <div style={{ color: "grey", marginLeft: "5px" }}>
                Don't have an account?{" "}
                <span style={{ color: "lightBlue" }}>Register here</span>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}
SignUp.propTypes = {
  setToken: PropTypes.func.isRequired,
};
ReactDOM.render(<SignUp />, document.getElementById("root"));
// export default SecondPage;
