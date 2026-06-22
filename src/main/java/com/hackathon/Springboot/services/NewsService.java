package com.hackathon.Springboot.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hackathon.Springboot.models.News;

@Service
public class NewsService {

    public List<News> getAllNews() {

        return List.of(
            new News(
                "AI Breakthrough",
                "New AI model released with better reasoning.",
                "/images/download.jpg","AI"
            ),
            new News(
                "India Wins Match",
                "India won a thrilling cricket match.",
                "/images/sports.jpg","Sports"
            ),
            new News(
                "Startup Funding",
                "A startup raised millions in funding.",
                "/images/business.jpg","Business"
            )
        );
    }
}