/*
 * Student ID	: IT14031380
 * Student Name : Perera P.D.S
 * Distributed Systems
 * Assignment 2 � Web Services
 * */
package com.it14031380.dsAssignment2.ticket.service;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

@Path("/Ticket")
public class TicketBookingService {
	public static Map<String, Map<String, String>> bookedTickets = new HashMap<>();

	// Getting ticket info by ID
	@GET
	@Consumes("text/plain")
	@Produces("application/json")
	@Path("/get/{id}")
	public Response getEmployee(@PathParam("id") String id) {
		id = id.trim();
		if (bookedTickets.containsKey(id)) {
			Map<String, String> info = new HashMap<>();
			info = bookedTickets.get(id);
			Ticket ticket = new Ticket();
			ticket.setDate(info.get("date"));
			ticket.setFoodItems(info.get("foodItems"));
			ticket.setSeats(info.get("seats"));
			ticket.setShowTime(info.get("showTime"));
			ticket.setTheater(info.get("theater"));
			ticket.setTicketNo(info.get("ticketNo"));
			ticket.setTotalPrice(info.get("totalPrice"));
			
	
			return Response.ok(ticket).build();
		}

		Message msg = new Message();
		msg.setMessage("ID is not registered");
		return Response.ok(msg).build();

	}

	// Add a new Ticket Booking
	@POST
	@Consumes("text/plain")
	@Produces("application/json")
	@Path("/insert/query")
	public Response bookTicket(@QueryParam("ticketNo") String ticketNo,
			@QueryParam("theater") String theater,
			@QueryParam("showTime") String showTime,
			@QueryParam("date") String date, @QueryParam("seats") String seats,
			@QueryParam("foodItems") String foodItems,
			@QueryParam("totalPrice") String totalPrice) {
		ticketNo = ticketNo.trim();
		if (!bookedTickets.containsKey(ticketNo)) {
			Map<String, String> ticketInfo = new HashMap<>();
			ticketInfo.put("theater", theater);
			ticketInfo.put("showTime", showTime);
			ticketInfo.put("date", date);
			ticketInfo.put("seats", seats);
			ticketInfo.put("foodItems", foodItems);
			ticketInfo.put("totalPrice", totalPrice);

			bookedTickets.put(ticketNo, ticketInfo);

			Message msg = new Message();
			msg.setMessage("Success");
			return Response.ok(msg).build();
		}
		Message msg = new Message();
		msg.setMessage("Fail");
		return Response.ok(msg).build();

	}

}