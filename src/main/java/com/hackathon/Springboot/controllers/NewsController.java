package com.hackathon.Springboot.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;

@RestController
@CrossOrigin("*")
public class NewsController {

    private static final String API_KEY = "fd0c5481b04f4f56d56ad0d6bc020013";

    @GetMapping("/news")
    public String getNews(@RequestParam String query) throws Exception {

        String url = "https://gnews.io/api/v4/search?q="
                + URLEncoder.encode(query, StandardCharsets.UTF_8)
                + "&lang=en&country=in&max=10&apikey="
                + API_KEY;

        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> response =
                client.send(request, HttpResponse.BodyHandlers.ofString());

        return response.body();
    }
}