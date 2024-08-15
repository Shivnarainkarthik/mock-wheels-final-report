package com.example.model.controller;

import com.example.model.entity.ContactMessage;
import com.example.model.service.ContactMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactMessageController {

    @Autowired
    private ContactMessageService contactMessageService;

    @PostMapping("/contact")
    public ResponseEntity<String> sendMessage(@RequestBody ContactMessage contactMessage) {
        contactMessageService.saveContactMessage(contactMessage);
        return ResponseEntity.ok("Message sent successfully");
    }

    @GetMapping("/contact")
    public ResponseEntity<List<ContactMessage>> getAllMessages() {
        List<ContactMessage> messages = contactMessageService.getAllContactMessages();
        return ResponseEntity.ok(messages);
    }
}
