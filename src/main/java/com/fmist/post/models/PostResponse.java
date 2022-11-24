package com.fmist.post.models;

public class PostResponse {
    private String message;

    public PostResponse(String message) {
        super();
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
