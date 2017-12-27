package com.open.model;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "instagram_food")
public class Instagram implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String id;
	private String area;
	private String name;
	private String caption;
	private String article_id;
	private String image_urls;
	private String time;
	private Integer like;
	
	public Instagram() {
		super();
	}
	
	public Instagram(String id, String area, String name, String caption, String article_id, String image_urls,
			String  time, Integer like) {
		super();
		this.id = id;
		this.area = area;
		this.name = name;
		this.caption = caption;
		this.article_id = article_id;
		this.image_urls = image_urls;
		this.time = time;
		this.like = like;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	public String getArticle_id() {
		return article_id;
	}

	public void setArticle_id(String article_id) {
		this.article_id = article_id;
	}

	public String getImage_urls() {
		return image_urls;
	}

	public void setImage_urls(String image_urls) {
		this.image_urls = image_urls;
	}


	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public Integer getLike() {
		return like;
	}

	public void setLike(Integer like) {
		this.like = like;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	



}
