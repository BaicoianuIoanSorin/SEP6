package com.bestmovies.sep6_project.model;

import java.util.List;

public abstract class Person {
    private List<Movie> movies;  // Change the type to List<Movie> for one-to-many relationship
    private int id;
    private String name;
    private int birthYear;

    public Person(){}
    public Person(String name, int birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
    public Person(int id, String name, int birthYear) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
    }
    public Person(List<Movie> movies, int id, String name, int birthYear) {
        this.movies = movies;
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getBirthYear() {
        return birthYear;
    }

    public void setBirthYear(int birthYear) {
        this.birthYear = birthYear;
    }
}
