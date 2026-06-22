package com.hackathon.Springboot.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home";
    }
@GetMapping("/technology")
public String technology() {
    return "technology";
}

@GetMapping("/sports")
public String sports() {
    return "sports";
}

@GetMapping("/business")
public String business() {
    return "business";
}
}