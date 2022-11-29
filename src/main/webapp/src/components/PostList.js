import React, {useEffect, useState} from 'react';
import PostService from "../api/PostService";
import {styled} from '@mui/material/styles';
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {Delete} from "@mui/icons-material";

const PostList = () => {
    const [posts, setPosts] = useState([])

    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


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
                <Table sx={{minWidth: 700}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell align="right">Title</StyledTableCell>
                            <StyledTableCell align="right">Text</StyledTableCell>
                            <StyledTableCell align="right">Updated</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((posts) => (
                            <StyledTableRow key={posts.id}>
                                <StyledTableCell component="th" scope="row">
                                    {posts.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{posts.title}</StyledTableCell>
                                <StyledTableCell align="right">{posts.text}</StyledTableCell>
                                <StyledTableCell align="right">{posts.time}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton aria-label="delete"
                                                color="inherit"
                                                onClick={() => PostService.deletePost(posts.id)}
                                    >
                                        <Delete/>
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PostList;