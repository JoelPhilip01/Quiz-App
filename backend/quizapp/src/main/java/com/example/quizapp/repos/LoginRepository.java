package com.example.quizapp.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.quizapp.entities.Login;

public interface LoginRepository extends JpaRepository<Login, Integer>{

}
