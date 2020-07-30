import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

// CSS STYLES
const useStyles = makeStyles({
    particlesCanvas: {
        position: "absolute",
        opacity: "0.6"
    }
})

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
