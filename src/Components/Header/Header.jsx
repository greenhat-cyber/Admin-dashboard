import React from "react";
import "./Header.css";
import { Col, Row } from "react-bootstrap";
import { navData } from "../../Utils/Data";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handlelogout = ()=>{
    localStorage.removeItem("admin-token");
    navigate("/login")
  }

  return (
    <div className="header">
      <Row>
        <Col className="nav-items">
          {navData?.map((items, idx) => (
            <li className={`${location.pathname === items.path ? "nav-item-active" : ""}`} onClick={() => navigate(items.path)} key={idx}>
              {items.name}
            </li>
          ))}
        </Col>

        <Col className="logo">
          <button className="logout-btn btn btn-danger" onClick={handlelogout}>Logout</button>
          <img
            src="https://www.luminartechnolab.com/static/media/logo%20vanner%200.1.ad159943.png"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
}

export default Header;
