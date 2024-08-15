package com.example.model.controller;
import com.example.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

@RestController
@RequestMapping("/api/contact")
public class Contactcontroller {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public String sendContactEmail(@RequestBody ContactRequest request) {
        String subject = "New Contact Message from " + request.getFirstName() + " " + request.getLastName();
        String body = "Name: " + request.getFirstName() + " " + request.getLastName() + "<br>" +
                "Email: " + request.getEmail() + "<br>" +
                "Mobile: " + request.getMobile() + "<br>" +
                "Message: " + request.getMessage();

        try {
            emailService.sendEmail(request.getEmail(), subject, body);
            return "Message sent successfully";
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Error sending message";
        }
    }
}
