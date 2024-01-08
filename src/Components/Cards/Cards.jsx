import React, { useState } from 'react'
import './Cards.css'
import EditCourse from '../../Pages/Courses/EditCourse'
import Swal from 'sweetalert2';
import { clearCourseDeleteState, deleteSuccess, fetchcourseDelete } from '../../store/courseList/CourseDeleteSlice';
import { fetchcourseList } from '../../store/courseList/CourseListSlice';
import { useDispatch } from 'react-redux';

function Cards(props) {
  
  const [editModalShow, setEditModalShow] = useState(false);

  let userRole = localStorage.getItem("user-role");

  const dispatch = useDispatch()

  const handleEditToggle=()=>{
    setEditModalShow(!editModalShow)
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
        dispatch(fetchcourseDelete({ courseID: id }));
        dispatch(clearCourseDeleteState());
      }
    });
  };
  return (
    <>
    <EditCourse editModalShow={editModalShow} handleEditToggle={handleEditToggle}/>
    <div className='cards'>
        <span className='m-0 p-0'style={{ color: "rgb(119, 255, 0)" ,fontSize:"25px"}}>{props?.data.title}</span>
        <span className='m-0 p-0'style={{ fontSize:"18px"}} >{props?.data.duration}</span>
        <p className='m-0 p-0'>{props?.data.calicut_date}</p>
        <p className='m-0 p-0'>{props?.data.cochin_date}</p>

        <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"1rem"}}>
        {
          userRole === "admin" ? 
          <div style={{display:"flex", justifyContent:"flex-end"}}>
          <button className='btn btn-success' onClick={handleEditToggle}>Edit</button>
        </div> : null
        }
        <button className='btn btn-danger' onClick={()=>handleDelete(props?.data.id)}>Delete</button>
        </div>


    </div>
    </>
  )
}

export default Cards