package com.epm.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.epm.server.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
    
}
