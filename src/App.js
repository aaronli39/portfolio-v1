import React from 'react'
import Index from './components/Index'
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import { CssBaseline } from '@material-ui/core'
import "./index.css"
import { Route } from 'react-router-dom'

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Route exact path="/" component={Index}></Route>
			<Route path="/resume" component={Resume}></Route>
			<Route path="/portfolio" component={Portfolio}></Route>
			<Route path="/contact" component={Contact}></Route>
		</React.Fragment>
	)
}

export default App
