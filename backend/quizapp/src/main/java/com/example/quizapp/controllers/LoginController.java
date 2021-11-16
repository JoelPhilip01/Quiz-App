package com.example.quizapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.quizapp.entities.Login;
import com.example.quizapp.repos.LoginRepository;
@CrossOrigin
@RestController
public class LoginController {
	@Autowired
	LoginRepository loginRepository;
	
	@RequestMapping(path = "/login", method = RequestMethod.GET)
//	@GetMapping("/")
	public List<Login> fetchAllLogins(){
		System.out.println("fetch all login method is invoked...");
//		return null;
		//db fetch
		return loginRepository.findAll();
	}
	
	@RequestMapping(path = "/login", method = RequestMethod.POST)
	public void addNewUser(@RequestBody Login login) {
		loginRepository.save(login);
	}

}
