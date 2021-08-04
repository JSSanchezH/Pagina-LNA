import { Icon } from "../../icon/Icon"

const icon = require("../../icon/Icon.json")

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="social">
				<a
					target="_blank"
					href="https://www.facebook.com/imperiolna"
					rel="noreferrer"
				>
					<Icon
						className={icon.fb.className}
						data-icon={icon.fb.dataIcon}
						viewBox={icon.fb.viewBox}
						d={icon.fb.d}
					/>
				</a>
				<a
					target="_blank"
					href="https://www.youtube.com/channel/UCZdYpcbLh52Mfw2B6gg7eKg"
					rel="noreferrer"
					className="icon"
				>
					<Icon
						className={icon.yt.className}
						data-icon={icon.yt.dataIcon}
						viewBox={icon.yt.viewBox}
						d={icon.yt.d}
					/>
				</a>
				<a
					target="_blank"
					href="https://discord.gg/akNcJcggcw"
					rel="noreferrer"
					className="icon"
				>
					<Icon
						className={icon.dc.className}
						data-icon={icon.dc.dataIcon}
						viewBox={icon.dc.viewBox}
						d={icon.dc.d}
					/>
				</a>
			</div>
			<p className="copy">
				&copy; J. S. Sánchez Hincapié 2021 - Todos los derechos
				reservados
			</p>
		</footer>
	)
}
