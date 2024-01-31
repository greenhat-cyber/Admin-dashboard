import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Cards from "../../Components/Cards/Cards";
import { useSelector } from "react-redux";

function Notifications() {
  const {courselist} = useSelector((state)=>state.courseListSlice)
  return (
    <div>
      <Row className="m-0 mt-4 ps-2 pe-2">
        {courselist?.map((item, idx) => {
          return (
            <Col md={3} className="mb-4">
              <Cards data={item} key={idx} textColor="red" />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Notifications;
