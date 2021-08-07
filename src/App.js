import { HashRouter as Router, Switch, Route } from "react-router-dom"

import { Home } from "./components/pages/Home"
import { Nav } from "./components/Navbar/Navbar"
import { Banner } from "./components/Banner"
import { Pages } from "./components/pages/Pages"
import { BT } from "./components/pages/BT"
import { GT } from "./components/pages/GT"
import { Rancor } from "./components/pages/Rancor"
import { GA } from "./components/pages/GA"
import { Footer } from "./components/pages/Footer"
import { Error404 } from "./components/pages/Error404"

import { PagesItems } from "./components/pages/PagesItems"
import { BTItems } from "./components/pages/BTItems"
import { GTItems } from "./components/pages/GTItems"
import { RancorItems } from "./components/pages/RancorItems"
import { GAItems } from "./components/pages/GAItems"
import "./App.css"
import img from "./images/banner.jpg"

export const App = () => (
	<Router>
		<Nav />
		<Banner img={img} alt="LNA" />
		<Switch>
			<Route exact path="/" component={Home} />
			{PagesItems.map((item, index) => (
				<Route key={index} exact path={item.to}>
					<Pages info={item.info} events={item.events} />
				</Route>
			))}
			{BTItems.map((item, index) => (
				<Route key={index} exact path={item.BT}>
					<BT gremio={item} />
				</Route>
			))}
			{GTItems.map((item, index) => (
				<Route key={index} exact path={item.GT}>
					<GT gremio={item} />
				</Route>
			))}
			{RancorItems.map((item, index) => (
				<Route key={index} exact path={item.Rancor}>
					<Rancor gremio={item} />
				</Route>
			))}
			{GAItems.map((item, index) => (
				<Route key={index} exact path={item.GA}>
					<GA gremio={item} />
				</Route>
			))}
			<Route path="*" component={Error404} status={404} />
		</Switch>
		<Footer />
	</Router>
)
