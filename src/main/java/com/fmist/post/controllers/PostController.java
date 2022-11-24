package com.fmist.post.controllers;

import com.fmist.post.models.PostRequest;
import com.fmist.post.models.PostResponse;
import com.fmist.post.repositories.PostRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000/")
public class PostController {

    private final PostRepository postRepository;

    public PostController(PostRepository repository) {
        this.postRepository = repository;
    }

    @GetMapping("/")
    List<PostRequest> getPosts() {
        return postRepository.findAll();
    }

    @PostMapping("/add")
    ResponseEntity<PostResponse> addPost(@Valid @RequestBody PostRequest postRequest) {
        postRepository.save(postRequest);
        return ResponseEntity.ok(new PostResponse("Success !"));
    }

    @PostMapping("/delete/{id}")
    String deletePost(@PathVariable Long id) {
        if (!postRepository.existsById(id)) {
            return "Post with id =" + id + "does not exists";
        }
        postRepository.deleteById(id);
        return "Post with id =" + id + "deleted successfully";
    }
}
