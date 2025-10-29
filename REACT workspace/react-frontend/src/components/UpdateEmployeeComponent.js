import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

function UpdateEmployeeComponent() 
{
  let navigate = useNavigate();

  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [doj,setDoj] = useState("");
  const [department,setDepartment]=useState({deptName:"",designation:""});
  const {id}=useParams();

  useEffect(()=>{
    EmployeeService.getEmployeeById(id).then(res=>{
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setDoj(res.data.doj)
      setDepartment({
        deptName: res.data.dept.deptName,
        designation: res.data.dept.designation
      })
    })
  },[id])

  const handleClick=(e)=>{
      e.preventDefault();
      navigate("/employees");
  }

  const updateHandler=(e)=>{

      e.preventDefault();

      const updatedHandler = {
        firstName,
        lastName,
        doj,
        dept:{
          deptName : department.deptName,
          designation : department.designation
        }
      }
      EmployeeService.updateEmployee(id,updatedHandler).then(res=>{
          navigate("/employees");
      })
  }



  return (
    <div className='container mt-3'>
       <div className='card col-md-6 offset-3'>
        <h4 className='text-center'> Update Employee</h4>  
        <div className='card-body'>
            <form>
              <label className='my-2'>First Name:</label>
              <input type="text" name="firstName" id="firstName" className='form-control'
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}/>

              <label className='my-2'>Last Name:</label>
              <input type="text" name="lastName" id="lastName" className='form-control'
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}/>

              <label className='my-2'>DOJ:</label>
              <input type="text" name="doj" id="doj" className='form-control'
              value={doj}
              onChange={(e)=>setDoj(e.target.value)}/>

              <label className='my-2'>Department:</label>
              <input type="text" name="department" id="department" className='form-control'
              value={department.deptName}
              onChange={(e)=> setDepartment({...department,deptName:e.target.value})}/>

              <label className='my-2'>Designation:</label>
              <input type="text" name="designation" id="designation" className='form-control'
              value={department.designation}
              onChange={(e)=> setDepartment({...department,designation:e.target.value})}
              />
            
              <button className='btn btn-danger mt-3 float-start' onClick={handleClick}> cancel</button>
              <button className='btn btn-success mt-3 float-end' onClick={updateHandler}> update </button>
            </form>
        </div>
      </div>     
    </div>
  )
}

export default UpdateEmployeeComponent