import React, {useEffect, useState} from 'react';
import PostService from "../api/PostService";
import {IconButton} from "@mui/material";
import {DeleteForever} from "@mui/icons-material";

const MaterialPost = () => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        PostService.request.get("/")
            .then(response => {
                setPosts(response.data)
                console.log(response.data)
            })
    }, [])

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Text</th>
                    <th scope="col">Updated</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((posts) => (
                            <tr>
                                <th scope="row">{posts.id}</th>
                                <td>{posts.title}</td>
                                <td>{posts.text}</td>
                                <td>{posts.time}</td>
                                <td>
                                    <IconButton aria-label="delete"
                                                size="medium"
                                                onClick={() => PostService.deletePost(posts.id)}
                                                >
                                        <DeleteForever
                                            fontSize="inherit"
                                        />
                                    </IconButton>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default MaterialPost;