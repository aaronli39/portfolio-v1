import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/styles'

// CSS STYLES
const useStyles = makeStyles({
    particlesCanvas: {
        position: "absolute",
    }
})

const Index = () => {
    const classes = useStyles()

    return (
        <div>
            <Navbar />
            <Particles
                params={{
                    number: {
                        value: 50
                    }
                }}
                canvasClassName={classes.particlesCanvas}
            />
            <Header />
        </div>
    )
}

export default Index
