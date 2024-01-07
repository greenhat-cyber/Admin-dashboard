import React from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";

function EditCourse(props) {
  return (
    <>
      <Modal
        show={props.editModalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-dark"
      >
        <Modal.Body >
          <h6>Edit Course</h6>
          <Row>
            <Col md={8}>
              <div className="mb-2">
                <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>Course Full Name</p>
                <input placeholder="Course Full Name" className="AddCourse-inp p-1 ps-2" />
              </div>
              <div className="mb-2">
                <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>Course Title</p>
                <input placeholder="Course Title" className="AddCourse-inp p-1 ps-2" />
              </div>
              <div className="mb-2">
                <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>Course Description</p>
                <textarea placeholder="Course Description" className="AddCourse-inp p-1 ps-2" style={{height:"6rem"}} />
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
                <input type="date" className="AddCourse-inp p-1 ps-2" />
              </div>
            </Col>
            <Col md={6} >
              <div className="mb-2">
                <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>Course Start Date(Calicut)</p>
                <input type="date" className="AddCourse-inp p-1 ps-2" />
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={3} className="mb-3">
              <input placeholder="Duration" className="AddCourse-inp p-1 ps-2" />
            </Col>
            <Col md={3} className="mb-3">
              <input placeholder="Online Fee(eg: 100000)" className="AddCourse-inp p-1 ps-2" />
            </Col>
            <Col md={3} className="mb-3">
              <input placeholder="Ofline Fee(eg: 100000)" className="AddCourse-inp p-1 ps-2" />
            </Col>
            <Col md={3} className="mb-3" style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
              <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>Active</p>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  // checked={switchState}
                  // onChange={handleSwitchChange}
                />
              </Form>
              <p className="m-0 p-0 mb-1 text-gray" style={{fontSize:"small"}}>InActive</p>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1rem"}}>
              <button className="addCourse-cancle" onClick={props?.handleEditToggle}>Cancle</button>
              <button className="addCourse-save" onClick={props?.handleEditToggle}>Save</button>
            </Col>
          </Row>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditCourse;
