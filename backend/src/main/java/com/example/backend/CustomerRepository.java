package com.example.backend;

import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Integer>{
    Customer findCustomerById(Integer id);
}
