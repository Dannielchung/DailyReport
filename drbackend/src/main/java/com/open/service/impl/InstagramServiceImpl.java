package com.open.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.open.model.Instagram;
import com.open.repository.InstagramRepository;
import com.open.service.InstagramService;

@Service
public class InstagramServiceImpl implements InstagramService {

	@Autowired  
    private MongoTemplate mongoTemplate;  
	
	@Autowired  
    private InstagramRepository instagramRepository;  
	
	@Override
	public Map<String, Integer> findAll(String area) {
		List<Instagram> ints = instagramRepository.findByArea(area);
		Map<String, Integer> countMap = new HashMap<>();
		for (Instagram instagram : ints) {
			if(instagram.getName()!=null)
				if(countMap.get(instagram.getName()) == null)
					countMap.put(instagram.getName(), 1);
				else
					countMap.replace(instagram.getName(), new Integer(countMap.get(instagram.getName()).intValue() + 1));
					
		}
		System.out.println(countMap.toString());
		return countMap;
	}

	@Override
	public List<Instagram> findByScoreMax() {
		return null;
	}

}
