package com.nagarro.ApiExitTest.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.ApiExitTest.entities.User;

public interface UserRepo extends JpaRepository<User, Integer> {


}
