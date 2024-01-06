package com.nagarro.ApiExitTest.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.nagarro.ApiExitTest.dao.UserRepo;
import com.nagarro.ApiExitTest.entities.User;

@RestController
public class UserController {

	@Autowired
	public UserRepo repo;

	@PostMapping(path = "/users")
	public void addUser(@RequestBody User user) {
		repo.save(user);
	}
	
//	@RequestMapping("/users/{email}")
//	public Optional<User> getUser(@PathVariable("uname") String email)
//	{
//		return repo.findById(email);
//
//	}
}
