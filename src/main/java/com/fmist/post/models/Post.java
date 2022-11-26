package com.fmist.post.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "title")
    @NotNull(message = "Title can't be empty")
    @Size(min = 3, message = "Title must be 3 chars or more")
    private String title;
    @Column(name = "text")
    @NotNull(message = "Text can't be empty")
    @Size(min = 1, message = "Text must be 1 or more chars")
    private String text;

    LocalDateTime timeCreated;

    @PrePersist
    @PreUpdate
    public void getDateTimeCreated() {
        timeCreated = LocalDateTime.now();
    }

    public String getTime() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yy HH:mm:ss");
        return formatter.format(timeCreated);
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
