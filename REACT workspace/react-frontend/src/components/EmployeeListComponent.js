import { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import EmployeeModal from './EmployeeModal';
import { motion } from 'framer-motion';
import { FaTrash, FaEdit, FaEye, FaPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmployeeListComponent() {
  let navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [text] = useTypewriter({
    words: ['Details', 'List', 'Info'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80
  });

  useEffect(() => {
    EmployeeService.getEmployees().then(res => setEmployees(res.data));
  }, []);

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then(() => EmployeeService.getEmployees().then(res => setEmployees(res.data)))
      .catch(error => console.error(error));
  };

  const viewEmployee = (employeeId) => {
    const employee = employees.find(emp => emp.id === employeeId);
    if (employee) setSelectedEmployee(employee);
    else alert('Employee not found');
  };

  const closeModal = () => setSelectedEmployee(null);

  return (
    <div className="container mt-4">
      <motion.h4 className='text-center text-dark' animate={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
        Employee {text} <Cursor />
      </motion.h4>

      <div className='my-4'>
        <Link to="/add-employee" className='btn btn-success'>
          <FaPlus className='me-2' /> Add Employee
        </Link>
      </div>

      <motion.div className='table-responsive' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <table className='table table-striped table-bordered'>
          <thead className='table-primary'>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOJ</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <motion.tr key={employee.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.3 }}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.doj}</td>
                <td>{employee.dept.deptName}</td>
                <td>{employee.dept.designation}</td>
                <td>
                  <Link to={`/update-employee/${employee.id}`} className='btn btn-info me-2'>
                    <FaEdit /> Update
                  </Link>
                  <button className='btn btn-danger me-2' onClick={() => deleteEmployee(employee.id)}>
                    <FaTrash /> Delete
                  </button>
                  <button className='btn btn-warning' onClick={() => viewEmployee(employee.id)}>
                    <FaEye /> View
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {selectedEmployee && <EmployeeModal employee={selectedEmployee} closeModal={closeModal} />}
    </div>
  );
}

export default EmployeeListComponent;
