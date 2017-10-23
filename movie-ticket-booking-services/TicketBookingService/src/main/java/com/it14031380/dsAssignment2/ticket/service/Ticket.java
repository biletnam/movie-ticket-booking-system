/*
 * Student ID	: IT14031380
 * Student Name : Perera P.D.S
 * Distributed Systems
 * Assignment 2 � Web Services
 * */
package com.it14031380.dsAssignment2.ticket.service;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "Ticket")
public class Ticket {
	private String ticketNo;
	private String theater;
	private String showTime;
	private String date;
	private String seats;
	private String foodItems;
	private String totalPrice;
	
	public String getTicketNo() {
		return ticketNo;
	}
	public void setTicketNo(String ticketNo) {
		this.ticketNo = ticketNo;
	}
	public String getTheater() {
		return theater;
	}
	public void setTheater(String theater) {
		this.theater = theater;
	}
	public String getShowTime() {
		return showTime;
	}
	public void setShowTime(String showTime) {
		this.showTime = showTime;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getSeats() {
		return seats;
	}
	public void setSeats(String seats) {
		this.seats = seats;
	}
	public String getFoodItems() {
		return foodItems;
	}
	public void setFoodItems(String foodItems) {
		this.foodItems = foodItems;
	}
	public String getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(String totalPrice) {
		this.totalPrice = totalPrice;
	}
	
}