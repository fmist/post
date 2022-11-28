import * as React from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import {MenuBook} from "@mui/icons-material";



const ButtonAppBar = () => {
    return (
        <div>
            <Box sx={{flexGrow: 0}} textAlign="center">
                <AppBar position="static">
                    <Toolbar variant="regular">
                        <IconButton edge="end" color="inherit" aria-label="menu" sx={{mr: 2}}>
                            <MenuBook/>
                        </IconButton>
                        <Typography variant="h6" color="Menu" component="div">
                            Postmanager
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default ButtonAppBar
