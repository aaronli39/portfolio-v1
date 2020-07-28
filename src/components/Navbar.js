import React, { useState } from "react"
import { Box, AppBar, Toolbar, IconButton, Typography, Avatar, makeStyles, Divider, List, ListItem, ListItemIcon, ListItemText, Drawer } from "@material-ui/core"
import { ArrowBack, Home, AssignmentInd, Apps, ContactMail } from "@material-ui/icons"
import avatar from "./images/avatar.png"

// CSS Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "30rem"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan",
    }
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts"
    }
]

const Navbar = () => {
    // states
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = (open) => () => {
        setState({right: open})
    }

    const classes = useStyles()

    const sideList = () => (
        <Box component="div" className={classes.menuSliderContainer}>
            <Avatar className={classes.avatar} src={avatar} alt="Xiaojie Li" />
            <Divider />
            <List disablePadding>
                {menuItems.map((lsItem, ind) => (
                    <ListItem button key={ind} >
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>

                ))}
            </List>
        </Box>
    )

    return (
        <React.Fragment>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider(true)}>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>

                        <Typography variant="h5" style={{ color: "tan" }}>Portfolio</Typography>
                        <Drawer anchor="right" open={state.right}>
                            {sideList()}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box >
        </React.Fragment >
    )
}

export default Navbar
