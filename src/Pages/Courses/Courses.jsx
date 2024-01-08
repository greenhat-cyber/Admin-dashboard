import React, { useEffect, useState } from "react";
import "./Courses.css";
import Cards from "../../Components/Cards/Cards";
import { Col, Row } from "react-bootstrap";
import { courseData } from "../../Utils/Data";
import AddCourse from "./AddCourse";
import EditCourse from "./EditCourse";
import { useDispatch, useSelector } from "react-redux";
import { fetchcourseList } from "../../store/courseList/CourseListSlice";


function Courses()  {
    const [modalShow, setModalShow] = useState(false);

    const [newtoggle, setNewToggle] = useState(false)

    let userRole = localStorage.getItem("user-role");

    const handleToggle=()=>{
        setModalShow(!modalShow)
    }

    const dispatch = useDispatch()

    const {courselist} = useSelector((state)=>state.courseListSlice)
    const { courseaddSuccess } = useSelector((state) => state.courseAddSlice);
    const { courseDeleteSuccess } = useSelector((state) => state.courseDeleteSlice);

    useEffect(() => {
      dispatch(fetchcourseList())
    }, [courseaddSuccess,courseDeleteSuccess])
    
  return (
     <>
     <AddCourse modalShow={modalShow} handleToggle={handleToggle}/>
     
    
      <div className="courses-container">
        {
          userRole === "superadmin" ? 
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
        </Row> : null
        }
        
        <Row className="m-0 mt-4 ps-2 pe-2">
          {courselist?.map((item, idx) => {
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
