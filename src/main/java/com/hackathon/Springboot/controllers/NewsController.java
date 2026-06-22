package com.hackathon.Springboot.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.Springboot.models.News;
import com.hackathon.Springboot.services.NewsService;

@RestController
public class NewsController {

    private final NewsService newsService;

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping("/api/news")
    public List<News> getNews() {
        return newsService.getAllNews();
    }
}