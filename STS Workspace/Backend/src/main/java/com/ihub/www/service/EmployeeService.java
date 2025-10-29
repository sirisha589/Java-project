package com.ihub.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.exception.ResourceNotFoundException;
import com.ihub.www.model.Employee;
import com.ihub.www.repository.EmployeeRepository;

@Service
public class EmployeeService 
{
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}
	
	public Employee addEmployee(Employee employee)
	{
		return employeeRepository.save(employee);
	}
	

	public Employee getEmployeeById(long id)
	{
		return employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
	}
	
	public ResponseEntity<Employee> updateEmployeeById(long id,Employee employee)
	{
		Employee existingEmp = employeeRepository.findById(id).get();
		
		existingEmp.setFirstName(employee.getFirstName());
		existingEmp.setLastName(employee.getLastName());
		existingEmp.setDoj(employee.getDoj());
		existingEmp.setDept(employee.getDept());
		
		employeeRepository.save(existingEmp);
		return new ResponseEntity<>(existingEmp,HttpStatus.OK);

	}
	
	public ResponseEntity<HttpStatus> deleteEmployee(long id)
	{
		Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee Does not Exit"));
		employeeRepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}

