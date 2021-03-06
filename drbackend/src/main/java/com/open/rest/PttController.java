package com.open.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.open.model.Instagram;
import com.open.model.Ptt;
import com.open.service.InstagramService;
import com.open.service.PttService;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class PttController {
	
	@Autowired  
    private PttService pttService;  
	
	@Autowired  
    private InstagramService instagramService; 

	@GetMapping("/ptt/{board}")
	public List<Ptt> loadPttBoard(@PathVariable(name = "board") String board) {
		List<Ptt> ptts = new ArrayList<>();
//		pttRepository.setCollectionName(board);
		ptts.addAll(pttService.findAll());
		return ptts;
	}
	
	@GetMapping("/ptt/top-ten/food")
	public List<Ptt> loadPttTopTenFood() {
		List<Ptt> ptts = new ArrayList<>();
		ptts.addAll(pttService.findByScoreMax());
		return ptts;
	}
	
	@GetMapping("instagram/area/food")
	public Map<String, Integer> loadInstagramTopFood(@RequestParam(name = "area") String area) {
		Map<String, Integer> ints = instagramService.findAll(area);
		return ints;
	}

}
