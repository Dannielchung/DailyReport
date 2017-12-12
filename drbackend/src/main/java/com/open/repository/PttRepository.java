package com.open.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.open.model.Ptt;

public interface PttRepository extends MongoRepository<Ptt, String>, PttRepositoryCustom{
	
}
