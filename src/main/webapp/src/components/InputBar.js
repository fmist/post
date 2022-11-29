import React, {useState} from 'react';
import PostService from "../api/PostService";
import {Box, Button, Container, TextField} from "@mui/material";
import {Send} from "@mui/icons-material";

const InputBar = () => {
    const [post, setPost] = useState({
        title: "",
        text: ""
    })

    const {title, text} = post
    const [errText, setErrText] = useState('');
    const [errTitle, setErrTitle] = useState('');

    const clickAddPost = async (post) => {
        await PostService.request.post("/add", post)
            .then((response) => {
                console.log(response.data)
                window.location.reload()
            }).catch((error) => {
                if (error.response) {
                    error.response.data.fieldErrors.forEach(fieldError => {
                        if (fieldError.field === 'title') {
                            setErrTitle(fieldError.message)
                        }
                        if (fieldError.field === 'text') {
                            setErrText(fieldError.message)
                        }
                    })
                }
            })
    }


    return (
        <Container maxWidth="xs">
            <h1>Create post</h1>
            <form>
                <Box mb={2}>
                    <TextField
                        label="Set title"
                        name="title"
                        value={title}
                        autoComplete="title"
                        autoFocus
                        helperText={errTitle}
                        onChange={(e) => setPost({...post, [e.target.name]: e.target.value})}
                    >
                    </TextField>
                </Box>
                <Box mb={2}>
                        <TextField
                        label="Set text"
                        name="text"
                        value={text}
                        helperText={errText}
                        onChange={(e) => setPost({...post, [e.target.name]: e.target.value})}
                    >
                        </TextField>
                </Box>
                    <Button
                        aria-errormessage={errTitle}
                        className="btn btn-outline-success"
                        onClick={() => clickAddPost(post)}
                        variant="contained"
                        endIcon={<Send/>}
                        color="info"
                >Success
                </Button>
            </form>
        </Container>
    );
};

export default InputBar;