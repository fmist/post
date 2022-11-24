import React, {useEffect, useState} from 'react';
import PostService from "../api/PostService";
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Delete} from "@mui/icons-material";

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
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Updated</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((posts) => (
                            <TableRow
                                key={posts.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {posts.id}
                                </TableCell>
                                <TableCell align="right">{posts.title}</TableCell>
                                <TableCell align="right">{posts.text}</TableCell>
                                <TableCell align="right">{posts.time}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete"
                                                size="small"
                                                onClick={() => PostService.deletePost(posts.id)}>
                                        <Delete/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MaterialPost;