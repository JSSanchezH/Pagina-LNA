import { useState } from "react"

import { NavLink } from "react-router-dom"

import "./Navbar.css"
import { MenuItems } from "./MenuItems"
import { Icon } from "../../icon/Icon"

const icon = require("../../icon/Icon.json")

export const Nav = (props) => {
	const [isActive, setActive] = useState(false)

	const toggleClass = () => {
		setActive(!isActive)
	}
	return (
		<header className="contenedor">
			<Icon
				className={isActive ? icon.cruz.className : icon.menu.className }
				data-icon={isActive ? icon.cruz.dataIcon : icon.menu.dataIcon }
				viewBox={isActive ? icon.cruz.viewBox : icon.menu.viewBox }
				d={isActive ? icon.cruz.d : icon.menu.d }
				onClick={toggleClass}
			/>
			<nav className={isActive ? "nav mostrar" : "nav"} id="nav">
				<ul className="menu">
					{MenuItems.map((item, index) => (
						<li key={index} className="menu__item">
							<NavLink
								className="menu__link"
								activeClassName="select"
								exact
								to={item.url}
							>
								{item.gremio}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
