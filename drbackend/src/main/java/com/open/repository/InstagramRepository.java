package com.open.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.open.model.Instagram;

public interface InstagramRepository extends MongoRepository<Instagram, String> {

	List<Instagram> findAllByArea(String area);

	List<Instagram> findByArea(String area);
	
}
