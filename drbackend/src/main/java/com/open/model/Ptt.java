package com.open.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Food")
public class Ptt implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String id;
	
	private String board;
	private String title;
	private String author;
	private String idcontent;
	private String ip;
	private String url;
	private Date updatetime;
	private Date date;
	Set<Comment> comments;
	
	public Ptt(String id, String board, String title, String author, String idcontent, String ip, String url,
			Date updatetime, Date date, Set<Comment> comments) {
		super();
		this.id = id;
		this.board = board;
		this.title = title;
		this.author = author;
		this.idcontent = idcontent;
		this.ip = ip;
		this.url = url;
		this.updatetime = updatetime;
		this.date = date;
		this.comments = comments;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getBoard() {
		return board;
	}

	public void setBoard(String board) {
		this.board = board;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getIdcontent() {
		return idcontent;
	}

	public void setIdcontent(String idcontent) {
		this.idcontent = idcontent;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Date getUpdatetime() {
		return updatetime;
	}

	public void setUpdatetime(Date updatetime) {
		this.updatetime = updatetime;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Set<Comment> getComments() {
		return comments;
	}

	public void setComments(Set<Comment> comments) {
		this.comments = comments;
	}
	
}
