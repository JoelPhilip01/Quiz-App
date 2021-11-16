package com.example.quizapp.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.quizapp.entities.Quiz;


public interface QuizRepository extends JpaRepository<Quiz, Integer>{

}
