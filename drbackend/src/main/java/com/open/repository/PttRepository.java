package com.open.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.open.model.Ptt;

public interface PttRepository extends MongoRepository<Ptt, String>, PttRepositoryCustom{
}
