/*
 * Student ID	: IT14031380
 * Student Name : Perera P.D.S
 * Distributed Systems
 * Assignment 2 – Web Services
 * */
package com.it14031380.dsAssignment2.ticket.service;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "Message")
public class Message {
	 private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
