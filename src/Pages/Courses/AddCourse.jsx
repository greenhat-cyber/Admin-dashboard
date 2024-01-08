import React, { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearCourseAddState, fetchcourseAdd } from "../../store/courseList/CourseAddSlice";

function AddCourse(props) {

  const dispatch = useDispatch();

  const {
    courseaddSuccess,
    courseaddError,
    courseaddErrorMessage,
  } = useSelector((state) => state.courseAddSlice);

  console.log('====================================');
  console.log("ms",courseaddErrorMessage);
  console.log('====================================');

  const [full_name, setCourseFullName] = useState("");
  const [title, setCourseTitle] = useState("");
  const [description, setCourseDescription] = useState("");
  const [cochin_date, setCourseStartDateCochin] = useState("");
  const [calicut_date, setCourseStartDateCalicut] = useState("");
  const [duration, setDuration] = useState("");
  const [online_fees, setOnlineFee] = useState("");
  const [offline_fees, setOfflineFee] = useState("");
  const [is_active, setIsActive] = useState(true);

  useEffect(() => {
    if (props.modalShow) {
      setCourseFullName("")
      setCourseTitle("")
      setCourseDescription("")
      setCourseStartDateCochin("")
      setCourseStartDateCalicut("")
      setDuration("")
      setOnlineFee("")
      setOfflineFee("")
      setIsActive("")
    }
  }, [props.modalShow]);

  const handleSave = () =>{

    let payload = {
      full_name,
      title,
      description,
      cochin_date,
      calicut_date,
      duration,
      online_fees,
      offline_fees,
    };
    let error = undefined;
    if (payload.full_name === "") {
      error = "Please enter a course full name"
    } else if (payload.title === "") {
      error = "Please enter a course title";
    } else if (payload.description === "") {
      error = "Please enter description";
    } else if (payload.cochin_date === "") {
      error = "Please enter a cochin date";
    } else if (payload.calicut_date === "") {
      error = "Please enter a calicut date";
    } else if (payload.duration === "") {
      error = "Please enter duration";
    } else if (payload.online_fees === "") {
      error = "Please enter online fees";
    } else if (payload.offline_fees === "") {
      error = "Please enter offline fees";
    }

    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        type: "error",
        theme: "light",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(fetchcourseAdd({ payload }));
    }
  }

  useEffect(() => {
    if (courseaddSuccess) {
      toast.success("Course created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        type: "success",
        theme: "light",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearCourseAddState());
      props.handleToggle()
    } else if (courseaddError) {
      toast.error(courseaddErrorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        type: "error",
        theme: "light",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      dispatch(clearCourseAddState());
    }
  }, [courseaddSuccess, courseaddError]);

  return (
    <>
      <Modal
        show={props.modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-dark"
      >
        <Modal.Body >
          <h6>Create a new Course</h6>
          <Row>
            <Col md={8}>
              <div className="mb-2">
                <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>Course Full Name</p>
                <input placeholder="Course Full Name" className="AddCourse-inp p-1 ps-2" onChange={(e) => setCourseFullName(e.target.value)} />
              </div>
              <div className="mb-2">
                <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>Course Title</p>
                <input placeholder="Course Title" className="AddCourse-inp p-1 ps-2" onChange={(e) => setCourseTitle(e.target.value)}/>
              </div>
              <div className="mb-2">
                <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>Course Description</p>
                <textarea placeholder="Course Description" className="AddCourse-inp p-1 ps-2" style={{height:"6rem"}} onChange={(e) => setCourseDescription(e.target.value)} />
              </div>
            </Col>
            <Col md={4} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <label style={{ cursor: 'pointer' }}>
              <input type="file" style={{ display: 'none' }} />
              <img
                style={{ width: "150px", border: "solid 1px #111", borderRadius: "10px" }}
                src="https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"
                alt=""
              />
            </label>
            </Col>
          </Row>
          <Row>
            <Col md={12} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <p className="text-dark fw-bold">Next Batch</p>
            </Col>
            <Col md={6} >
              <div className="mb-2">
                <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>Course Start Date(Cochin)</p>
                <input type="date" className="AddCourse-inp p-1 ps-2" onChange={(e) => setCourseStartDateCochin(e.target.value)} />
              </div>
            </Col>
            <Col md={6} >
              <div className="mb-2">
                <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>Course Start Date(Calicut)</p>
                <input type="date" className="AddCourse-inp p-1 ps-2" onChange={(e) => setCourseStartDateCalicut(e.target.value)}/>
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={3} className="mb-3">
              <input placeholder="Duration" className="AddCourse-inp p-1 ps-2" onChange={(e) => setDuration(e.target.value)}/>
            </Col>
            <Col md={3} className="mb-3">
              <input placeholder="Online Fee(eg: 100000)" className="AddCourse-inp p-1 ps-2" onChange={(e) => setOnlineFee(e.target.value)}/>
            </Col>
            <Col md={3} className="mb-3">
              <input placeholder="Ofline Fee(eg: 100000)" className="AddCourse-inp p-1 ps-2" onChange={(e) => setOfflineFee(e.target.value)}/>
            </Col>
            <Col md={3} className="mb-3" style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
              <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>Active</p>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  checked={is_active}
                  onChange={() => setIsActive(!is_active)}
                />
              </Form>
              <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>InActive</p>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1rem"}}>
              <button className="addCourse-cancle" onClick={props?.handleToggle}>Cancle</button>
              <button className="addCourse-save" onClick={handleSave}>Save</button>
            </Col>
          </Row>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddCourse;
