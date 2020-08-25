import React from "react"
import avatar from "./images/avatar.png"
import { Box, Avatar, Typography, makeStyles, Grid } from '@material-ui/core'
import Typewriter from "typewriter-effect"

// CSS Styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato",
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem",
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
    },
}))

const Header = () => {
    const classes = useStyles()

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar src={avatar} className={classes.avatar} alt="Xiaojie Li" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Xiaojie Li")
                            .callFunction(() => {
                                console.log("String typed out!");
                            })
                            .start();
                    }}
                />
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
                <Typewriter
                    options={{
                        strings: ["Software Engineer", "Javascript Enthusiast", "Web Developer", "Coffee Lover", ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 80,
                    }}
                />
            </Typography>
        </Box>
    )
}

export default Header
