package com.it14031380.dsAssignment2.paymentService;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "ResponceMessage")
public class ResponceMessage {
	 private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
