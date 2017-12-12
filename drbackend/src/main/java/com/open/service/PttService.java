package com.open.service;

import java.util.List;

import com.open.model.Ptt;

public interface PttService {
	
	List<Ptt> findAll();
	List<Ptt> findByScoreMax();
	
}
