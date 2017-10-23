package com.it14031380.dsAssignment2.paymentService;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "Payment")
public class Payment {
	private int cardNo;
	private double amount;
	
	public int getCardNo() {
		return cardNo;
	}
	public void setCardNo(int cardNo) {
		this.cardNo = cardNo;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
}
