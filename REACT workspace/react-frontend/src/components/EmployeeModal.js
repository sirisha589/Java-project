import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const EmployeeModal = ({ employee, closeModal }) => {
    if (!employee) return null;

    return (
        <div className="overlay" onClick={closeModal} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1050
        }}>
            <motion.div 
                className="modal-dialog modal-content p-4"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ color: '#333', backgroundColor: '#fff' }}
            >
                <h4 className="text-center text-primary mb-4">Employee Details</h4>
                <p><strong>ID:</strong> {employee.id}</p>
                <p><strong>First Name:</strong> {employee.firstName}</p>
                <p><strong>Last Name:</strong> {employee.lastName}</p>
                <p><strong>Date of Joining:</strong> {employee.doj}</p>
                <p><strong>Department:</strong> {employee.dept.deptName}</p>
                <p><strong>Designation:</strong> {employee.dept.designation}</p>
                <div className="text-center">
                    <button className="btn btn-danger w-100" onClick={closeModal}>Close</button>
                </div>
            </motion.div>
        </div>
    );
};

export default EmployeeModal;
