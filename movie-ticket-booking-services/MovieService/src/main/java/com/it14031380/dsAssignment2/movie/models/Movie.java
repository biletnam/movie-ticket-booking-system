/*
 * Student ID	: IT14031380
 * Student Name : Perera P.D.S
 * Distributed Systems
 * Assignment 2 � Web Services
 * */
package com.it14031380.dsAssignment2.movie.models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Movie {
	private String id;
	private String name;
	private String genre;
	private String year;
	private String director;
	private String description;	
	private String imageUrl;

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getGenre() {
		return genre;
	}
	
	public void setGenre(String genre) {
		this.genre = genre;
	}
	
	public String getYear() {
		return year;
	}
	
	public void setYear(String year) {
		this.year = year;
	}
	
	public String getDirector() {
		return director;
	}
	
	public void setDirector(String director) {
		this.director = director;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}
	
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
}