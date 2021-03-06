import React from "react";
import "./App.css";
import { Layout, Typography, Space } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Exchanges,
  Home,
  CryptoCurrencies,
  News,
  CryptoDetails,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/exchanges" element={<Exchanges />}></Route>
              <Route
                path="/cryptocurrencies"
                element={<CryptoCurrencies />}
              ></Route>
              <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
              <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse &#169; All Rights Reserved{" "}
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
