package com.fmist.post.repositories;

import com.fmist.post.models.PostRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<PostRequest, Long> {
}
