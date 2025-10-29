import React from 'react';
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  const pageVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <div>
      <HeaderComponent />

      <BrowserRouter>
        <div className="container flex-grow-1 mt-4">
          <Routes>
            <Route exact path="/" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <EmployeeListComponent />
              </motion.div>
            } />
            <Route path="/employees" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <EmployeeListComponent />
              </motion.div>
            } />
            <Route path="/add-employee" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <CreateEmployeeComponent />
              </motion.div>
            } />
            <Route path="/update-employee/:id" element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <UpdateEmployeeComponent />
              </motion.div>
            } />
          </Routes>
        </div>
      </BrowserRouter>

      <FooterComponent />
    </div>
  );
}

export default App;
