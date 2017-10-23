/*
 * Student ID	: IT14031380
 * Student Name : Perera P.D.S
 * Distributed Systems
 * Assignment 2 – Web Services
 * */
package com.it14031380.dsAssignment2.movie.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.it14031380.dsAssignment2.movie.models.Movie;
import com.it14031380.dsAssignment2.movie.models.Theater;

public class TheaterController {
	static TheaterController theaterController = null;
	Map<Integer, Theater> theaterList = new HashMap<Integer, Theater>();
	
	private TheaterController() {		
		//Creating some movies for the theaters
    	Movie movie1 = new Movie();
    	movie1.setId("1");
    	movie1.setName("Transformers: The Last Knight");
    	movie1.setDescription("A washed up monster chaser convinces the U.S. Government to fund a trip to an unexplored island in the South Pacific. Under the guise of geological research, the team travels to \"Skull Island\". Upon arrival, the group discover that their mission may be complicated by the wildlife which inhabits the island. The beautiful vistas and deadly creatures create a visually stunning experience that is sure to keep your attention.");
    	movie1.setDirector("Jordan Vogt-Roberts");
    	movie1.setGenre("Action / Adventure / Fantasy / Sci-Fi");
    	movie1.setImageUrl("https://yts.ag/assets/images/movies/kong_skull_island_2017/medium-cover.jpg");
    	movie1.setYear("2017");
                
        Movie movie2 = new Movie();
        movie2.setId("2");
        movie2.setName("Moontrap: Target Earth");
        movie2.setDescription("A long forgotten ancient spacecraft discovered on Earth. Investigations carried out by Scout transport her to the moon whereupon she meets the impressive machines preserving the wisdom of that long lost civilization.");
        movie2.setDirector("Robert Dyke");
        movie2.setGenre("Action / Adventure / Sci-Fi");
        movie2.setImageUrl("https://yts.ag/assets/images/movies/moontrap_target_earth_2017/medium-cover.jpg");
        movie2.setYear("2017");
               
        Movie movie3 = new Movie();
        movie3.setId("3");
        movie3.setName("Arrival");
        movie3.setDescription("When mysterious spacecraft touch down across the globe, an elite team - led by expert linguist Louise Banks - is brought together to investigate. As mankind teeters on the verge of global war, Banks and the team race against time for answers - and to find them, she will take a chance that could threaten her life, and quite possibly humanity.");
        movie3.setDirector("Denis Villeneuve");
        movie3.setGenre("Drama / Mystery / Sci-Fi / Thriller");
        movie3.setImageUrl("https://yts.ag/assets/images/movies/arrival_2016/medium-cover.jpg");
        movie3.setYear("2016");
                
        Movie movie4 = new Movie();
        movie4.setId("4");
        movie4.setName("Zootopia");
        movie4.setDescription("From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde, a wily fox who makes her job even harder.");
        movie4.setDirector("Byron Howard");
        movie4.setGenre("Action / Adventure / Animation / Comedy / Crime / Family / Mystery");
        movie4.setImageUrl("https://yts.ag/assets/images/movies/zootopia_2016/medium-cover.jpg");
        movie4.setYear("2016");
               
        Movie movie5 = new Movie();
        movie5.setId("5");
        movie5.setName("The Legend of Tarzan");
        movie5.setDescription("Following his parents' death in Africa, John Clayton has been be raised by an ape, was known by the name Tarzan, but eventually left Africa and for his parents' home in England, along with the woman he fell in love with and married, Jane Porter. He is asked by Belgian King Leopold to go to Africa to see what he has done there to help the country. Initially, he refuses. But an American, George Washington Williams, wants him to accept so he can accompany him. He says that Leopold might be committing all sorts of atrocities to achieve his goal, like slavery.");
        movie5.setDirector("David Yates");
        movie5.setGenre("Action / Adventure / Drama / Romance");
        movie5.setImageUrl("https://yts.ag/assets/images/movies/the_legend_of_tarzan_2016/medium-cover.jpg");
        movie5.setYear("2016");
                
        Movie movie6 = new Movie();
        movie6.setId("6");
        movie6.setName("Kung Fu Panda 3");
        movie6.setDescription("When Po's long-lost panda father suddenly reappears, the reunited duo travels to a secret panda paradise to meet scores of hilarious new panda characters. But when the supernatural villain Kai begins to sweep across China defeating all the kung fu masters, Po must do the impossible-learn to train a village full of his fun-loving, clumsy brethren to become the ultimate band of Kung Fu Pandas.");
        movie6.setDirector("Jennifer Yuh");
        movie6.setGenre("Action / Adventure / Animation / Comedy / Family / Fantasy");
        movie6.setImageUrl("https://yts.ag/assets/images/movies/kung_fu_panda_3_2016/medium-cover.jpg");
        movie6.setYear("2016");
       	
		//Creating Theaters -----------------------------------------------

        // Theater Object 01
		Theater theater1 = new Theater();
		theater1.setId(1);
		theater1.setName("Savoy Permiere");
		theater1.setLocation("Wellawatte");
				
		List<String> theater1MList = new ArrayList<String>();
		theater1MList.add(movie1.getName());
		theater1MList.add(movie2.getName());
		theater1MList.add(movie3.getName());
		theater1.setMoviesList(theater1MList);

		List<String> theater1ShowTimes = new ArrayList<String>();
		theater1ShowTimes.add("10.30 AM");
		theater1ShowTimes.add("13.30 PM");
		theater1ShowTimes.add("16.30 PM");
		theater1.setShowTimes(theater1ShowTimes);
		
		List <String> theater1Categories = new ArrayList<String>();
		theater1Categories.add("ODC");
		theater1Categories.add("BALCONY");
		theater1Categories.add("BOX");
		theater1.setAvaiableCategories(theater1Categories);
		
		// Theater Object 02
		Theater theater2 = new Theater();
		theater2.setId(1);
		theater2.setName("Cinemax");
		theater2.setLocation("Jaela");
	
		List<String> theater2MList = new ArrayList<String>();
		theater2MList.add(movie2.getName());
		theater2MList.add(movie4.getName());
		theater2MList.add(movie6.getName());
		theater2.setMoviesList(theater2MList);
		
		List<String> theater2ShowTimes = new ArrayList<String>();
		theater2ShowTimes.add("10.00 AM");
		theater2ShowTimes.add("12.30 PM");
		theater2ShowTimes.add("16.00 PM");
		theater2.setShowTimes(theater2ShowTimes);
		
		List <String> theater2Categories = new ArrayList<String>();
		theater2Categories.add("ODC");
		theater2Categories.add("BALCONY");
		theater2Categories.add("BOX");
		theater2.setAvaiableCategories(theater2Categories);
		
		//Theater Object 03
		Theater theater3 = new Theater();
		theater3.setId(1);
		theater3.setName("Regal");
		theater3.setLocation("Ambalangoda");
		
		List<String> theater3ShowTimes = new ArrayList<String>();
		theater3ShowTimes.add("11.30 AM");
		theater3ShowTimes.add("15.30 PM");
		theater3ShowTimes.add("18.00 PM");
		theater3.setShowTimes(theater3ShowTimes);
		
		List<String> theater3MList = new ArrayList<String>();
		theater3MList.add(movie4.getName());
		theater3MList.add(movie5.getName());
		theater3MList.add(movie6.getName());
		theater3.setMoviesList(theater3MList);
		
		List <String> theater3Categories = new ArrayList<String>();
		theater3Categories.add("ODC");
		theater3Categories.add("BALCONY");
		theater3Categories.add("BOX");
		theater3.setAvaiableCategories(theater3Categories);
		
		// Adding Theaters to theater list
		theaterList.put(1, theater1);
		theaterList.put(2, theater2);
		theaterList.put(3, theater3);
	}
	
	// Singleton pattern is used to eliminate conflicts
	// Create and return single object
	public static TheaterController getTheaterController() {
		if (theaterController != null) {
			return theaterController;
		} else {
			theaterController = new TheaterController();
			return theaterController;
		}
	}

	// Returns Theater object according to the id
	public Theater getTheaterById(int id) {
		return theaterList.get(id);
	}

	// Returns all Theater objects
	public Map<Integer, Theater> getAllTheaters() {
		return theaterList;
	}
	//Returns all movies in a theater
	

}
