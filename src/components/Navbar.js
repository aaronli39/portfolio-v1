import React, { useState } from "react"
import { Box, AppBar, Toolbar, IconButton, Typography, Avatar, makeStyles, Divider, List, ListItem, ListItemIcon, ListItemText, Drawer } from "@material-ui/core"
import { Home, AssignmentInd, Apps, ContactMail, MenuOpenRounded } from "@material-ui/icons"
import avatar from "./images/avatar.png"
import { Link } from "react-router-dom"

// CSS Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: "65vw",
        maxWidth: "300px",
        background: "#511",
        height: "100%"
    },
    avatar: {
        // display: "block",
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
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        listPath: "/contact"
    }
]

const Navbar = () => {
    // states
    const [state, setState] = useState(false)

    const classes = useStyles()

    const sideList = () => (
        <Box component="div" className={classes.menuSliderContainer}>
            <Avatar className={classes.avatar} src={avatar} alt="Xiaojie Li's Avatar" />
            <Divider />
            <List disablePadding>
                {menuItems.map((lsItem, ind) => (
                    <ListItem button key={ind} component={Link} to={lsItem.listPath} >
                        <ListItemIcon className={classes.listItem} onClick={() => setState(false)}>
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
            <Box component="nav" style={{display:"block"}}>
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar disableGutters>
                        <Box ml={2} component="div" style={{ flex: 1 }}>
                            <Typography variant="h5" style={{ color: "tan" }} >Portfolio</Typography>
                        </Box>
                        <Drawer anchor="right" open={state} onClose={() => setState(false)}>
                            {sideList()}
                        </Drawer>

                        <IconButton onClick={() => setState(true)} >
                            <MenuOpenRounded style={{ color: "tomato" }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box >
        </React.Fragment >
    )
}

export default Navbar
