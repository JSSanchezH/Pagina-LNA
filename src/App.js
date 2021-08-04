import {
	HashRouter as Router,
	Switch,
	Route,
} from "react-router-dom"

import { Home } from "./components/pages/Home"
import { Nav } from "./components/Navbar/Navbar"
import { Banner } from "./components/Banner"
import { Pages } from "./components/pages/Pages"
import { Footer } from "./components/pages/Footer"
import { Error404 } from "./components/pages/Error404"

import { PagesItems } from "./components/pages/PagesItems"
import "./App.css"
import img from "./images/banner.jpg"

export const App = () => (
	<Router>
		<Nav />
		<Banner img={img} alt="LNA" />
		<Switch>
			<Route exact path="/" component={Home}/>
			{PagesItems.map((item, index) => (
				<Route key={index} exact path={item.to}>
					<Pages gremio={item.id} />
				</Route>
			))}
			<Route path="*" component={Error404} status={404}/>
		</Switch>
		<Footer />
	</Router>
)
