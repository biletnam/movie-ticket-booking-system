/*
 * Student ID	: IT14031380
 * Student Name : Perera P.D.S
 * Distributed Systems
 * Assignment 2 – Web Services
 * */
package com.it14031380.dsAssignment2.restaurant.service;

import java.util.ArrayList;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import com.it14031380.dsAssignment2.restaurant.controllers.RestaurantController;
import com.it14031380.dsAssignment2.restaurant.models.Restaurant;


@Path("/")
public class RestaurantService {
	// Returns all movies in JSON format
    @GET
    @Path("/GetAllFoodItems")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Restaurant> getAllTaks2() {
        RestaurantController restuerentController = RestaurantController.getTheaterController();
        // Cannot convert HashMap to JSON
        // All objects are casted to ArrayList
        return new ArrayList<Restaurant>(restuerentController.getAllResturents().values());
    }

}