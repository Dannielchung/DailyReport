package com.open.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import com.open.model.Ptt;
import com.open.repository.PttRepository;
import com.open.service.PttService;

@Service
public class PttServiceImpl implements PttService{
	
	@Autowired  
    private MongoTemplate mongoTemplate;  
	
	@Autowired
	PttRepository pttRepository;
	
	@SuppressWarnings("deprecation")
	@PreAuthorize("hasRole('USER')")
	public List<Ptt> findByScoreMax() {  
	    Sort sort = new Sort(new Order(Direction.DESC, "score"));  
	    Criteria criteria = Criteria.where("score").gt(0);
	    Query query = new Query(criteria);  
	    query.addCriteria(Criteria.where("title").regex("^(?!.*[公告]).*$"));  
	    query.with(sort).limit(10);  
	    List<Ptt> pttList = mongoTemplate.find(query,  
	            Ptt.class);  
	    if (pttList.size() == 0) {  
	        return null;  
	    }  
	    return pttList;  
	}  
	
	@PreAuthorize("hasRole('ADMIN')")
    public List<Ptt> findAll() throws AccessDeniedException {
        List<Ptt> result = pttRepository.findAll();
        return result;
    }
}
