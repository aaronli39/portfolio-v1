import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

// CSS STYLES
const useStyles = makeStyles(theme => ({
    particlesCanvas: {
        position: "absolute",
        opacity: "0.7",
        height: "calc(100vh - 64px) !important",
        // top: " !important",
        [theme.breakpoints.down("sm")]: {
            height: "calc(100vh - 56px) !important",
        }
    }
}))

const Index = () => {
    const classes = useStyles()

    return (
        <>
            <Navbar />
            <Particles
                params={{
                    number: {
                        value: 1000
                    }
                }}
                canvasClassName={classes.particlesCanvas}
            />
            <Header />
        </>
    )
}

export default Index
