package com.hackathon.Springboot.models;

public class News {

    private String title;
    private String description;
    private String image;
    private String category;

    public News(String title, String description, String image, String category) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public String getCategory() {
        return category;
    }
}