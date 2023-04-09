import React from "react";
import { Row, Button, Form, Input, Col } from "antd";
import {
  GoogleOutlined,
  AppleFilled,
  PieChartOutlined,
  TransactionOutlined,
  ScheduleOutlined,
  UserOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";

const { Search } = Input;
const SecondPage = () => {
  return (
    <>
      {" "}
      <div
        style={{
          padding: "20px",
          borderRadius: "20px",
          // border: "1px solid pink",
        }}
      >
        <Row>
          <div
            style={{
              background: "#000",
              width: "20vw",
              height: "92vh",
              borderRadius: "20px",
            }}
          >
            <Col>
              <div
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "36px",
                  margin: "40px 0 0 30px",
                }}
              >
                Board.
              </div>
              <div
                style={{
                  color: "#fff",
                  // fontWeight: "bold",
                  fontSize: "16px",
                  margin: "80px 0 0 30px",
                }}
              >
                <PieChartOutlined style={{ marginRight: "5px" }} />{" "}
                <u>Dashboard</u>
              </div>
              <div
                style={{
                  color: "#fff",
                  // fontWeight: "bold",
                  fontSize: "16px",
                  margin: "30px 0 0 30px",
                }}
              >
                <TransactionOutlined style={{ marginRight: "5px" }} />
                <u>Transactions</u>
              </div>
              <div
                style={{
                  color: "#fff",
                  // fontWeight: "bold",
                  fontSize: "16px",
                  margin: "30px 0 0 30px",
                }}
              >
                <ScheduleOutlined style={{ marginRight: "5px" }} />{" "}
                <u>Schedules</u>
              </div>
              <div
                style={{
                  color: "#fff",
                  // fontWeight: "bold",
                  fontSize: "16px",
                  margin: "30px 0 0 30px",
                }}
              >
                <UserOutlined style={{ marginRight: "5px" }} /> <u>Users</u>
              </div>
              <div
                style={{
                  color: "#fff",
                  // fontWeight: "bold",
                  fontSize: "16px",
                  margin: "30px 0 0 30px",
                }}
              >
                <SettingOutlined style={{ marginRight: "5px" }} />{" "}
                <u>Settings</u>
              </div>
            </Col>
          </div>
          <Row>
            <div>Dashboard</div>
            <Search />
            <BellOutlined style={{ color: "#000" }} />
          </Row>
        </Row>
      </div>
    </>
  );
};
export default SecondPage;
