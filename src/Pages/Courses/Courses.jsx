import React, { useState } from "react";
import "./Courses.css";
import Cards from "../../Components/Cards/Cards";
import { Col, Row } from "react-bootstrap";
import { courseData } from "../../Utils/Data";
import AddCourse from "./AddCourse";


function Courses()  {
    const [modalShow, setModalShow] = useState(false);
    const handleToggle=()=>{
        setModalShow(!modalShow)
    }
  return (
     <>
     <AddCourse modalShow={modalShow} handleToggle={handleToggle}/>
    
      <div className="courses-container">
        <Row className="mt-4 m-0">
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "2rem",
            }}
          >
            <button className="addbutton "onClick={handleToggle}>Create a course</button>
          </Col>
        </Row>
        <Row className="m-0 mt-4 ps-2 pe-2">
          {courseData?.map((item, idx) => {
            return (
              <Col md={3} className="mb-4">
                <Cards data={item} key={idx} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default Courses;
