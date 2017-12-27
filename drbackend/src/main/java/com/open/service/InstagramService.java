package com.open.service;

import java.util.List;
import java.util.Map;

import com.open.model.Instagram;

public interface InstagramService {
	
	List<Instagram> findByScoreMax();
	Map<String, Integer> findAll(String area);
	
}
