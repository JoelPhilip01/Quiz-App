package com.example.quizapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.quizapp.entities.Quiz;
import com.example.quizapp.repos.QuizRepository;
@CrossOrigin
@RestController

public class QuizController {

	@Autowired
	QuizRepository quizRepository;
	
	@RequestMapping(path = "/quiz", method = RequestMethod.GET)
//	@GetMapping("/")
	public List<Quiz> fetchAllQuizzes(){
		System.out.println("fetch all quiz method is invoked...");
//		return null;
		//db fetch
		return quizRepository.findAll();
	}
	
	@RequestMapping(path = "/quiz", method = RequestMethod.POST)
	public void addQuiz(@RequestBody Quiz quiz) {
		quizRepository.save(quiz);
	}
	@RequestMapping(path = "/quiz/{quizid}", method = RequestMethod.DELETE)
	public void deleteQuiz(@PathVariable("quizid") int quizId) {
		quizRepository.deleteById(quizId);
		
	}

}
